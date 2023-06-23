import * as SQLite from 'expo-sqlite';
import { Columns, Migrations } from '../types/types';
import { Table } from './table';
import { sql } from './utils';

export class ExpoSQLiteORM {
    /** The WebSQLDatabase object */
    database: SQLite.WebSQLDatabase;
    version: number;
    migrations?: Migrations;

    /**
     * 
     * @param dbName Name of the database
     */
    constructor(dbName: string, version=0, migrations?: Migrations, autoMigrate=false) {
        this.database = SQLite.openDatabase(dbName);
        this.version = version;
        this.migrations = migrations;
        if (autoMigrate) this.migrate(this.migrations);
    }

    /**
     * Returns a Table using the specified table name and columns mapping
     * @param tableName Name of the table
     * @param columns An object literal mapping column names to their respective data types
     * @returns An SQL Table object that can perform CRUD operations
     */
    initializeTable<T extends object>(tableName: string, columns: Columns<T>): Table<T> {
        return new Table(this.database, tableName, columns);
    }

    migrate(migrations?: Migrations) {
        const activeMigrations = migrations ?? this.migrations;
        this.database.transaction(tx => {
            tx.executeSql(
                'PRAGMA user_version;',
                undefined,
                (tx, resultSet) => {
                    if (activeMigrations) {
                        const version: number = resultSet.rows._array[0]['user_version'];
                        const versionNums = Object.keys(activeMigrations).map(x => parseInt(x)).sort((a,b) => a-b);
                        let currIdx = versionNums.indexOf(version);
                        let migrated = false;
                        while (currIdx <= versionNums.length - 1 && versionNums[currIdx] < this.version) {
                            const statement = sql`${activeMigrations[versionNums[currIdx]]}`;
                            tx.executeSql(
                                statement,
                                undefined,
                                () => console.log(`[OK] Executed migration SQL: ${statement}`),
                                (_tx, err) => {
                                    console.log(err);
                                    return false;
                                }
                            )
                            migrated = true;
                            currIdx++;
                        }

                        if (migrated) {
                            tx.executeSql(
                                `PRAGMA user_version=${this.version};`,
                                undefined,
                                () => console.log(`Successfully migrated from user_version ${version} to user_version ${this.version}`),
                                (_tx, err) => {
                                    console.log(err);
                                    return false;
                                }
                            )
                        }
                        
                    }
                },
                (_tx, err) => {
                    console.log(err);
                    return false;
                }
            )
        })
    }

    executeSql(query: string, args?: (string | number | null)[], successCallback?: SQLite.SQLStatementCallback, errorCallback?: SQLite.SQLStatementErrorCallback) {
        this.database.transaction(tx => {
            tx.executeSql(
                query,
                args,
                successCallback,
                errorCallback
            )
        });
    }
}