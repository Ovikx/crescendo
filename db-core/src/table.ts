import { ColumnDefinition, ColumnType, SelectOptions } from '../types/types';
import { Columns } from '../types/types';
import * as SQLite from 'expo-sqlite';
import { sql } from './utils';

export class Table<T extends object> {
    database: SQLite.WebSQLDatabase;
    name: string;
    columns: Columns<T>;

    constructor(db: SQLite.WebSQLDatabase, name: string, columns: Columns<T>) {
        this.database = db;
        this.name = name;
        this.columns = columns;
    }

    /**
     * Adds this table to the database if it doesn't exist already.
     */
    createTable<T extends ColumnType>() {
        const cols: string[] = [];
        for (const [colName, colDef] of Object.entries(this.columns) as [string, ColumnDefinition<T>][]) {
            let colStr = `${colName} ${colDef.dataType}`;
            if (colDef.constraints) {
                colStr += ` ${colDef.constraints.join(' ')}`;
            }

            if (colDef.default != undefined) {
                console.log('default');
                colStr += ` DEFAULT ${colDef.default}`;
            }

            cols.push(colStr);
        }
    
        const statement = `CREATE TABLE IF NOT EXISTS ${this.name} (${cols.join(', ')});`;
        this.database.transaction(
            tx => tx.executeSql(statement),
            e => console.log(`[ERR] ${e} | Executed SQL: ${statement}`),
            () => console.log(`[OK] Executed SQL: ${statement}`)
        ); // TODO: replace success callback with a user-provided callback
    }

    /**
     * Deletes the table from the database
     */
    deleteTable() {
        this.database.transaction(tx => {
            tx.executeSql(
                `DROP TABLE IF EXISTS ${this.name}`,
                undefined,
                () => console.log('[OK] Dropped the table'),
                (_tx, err) => {
                    console.log(err);
                    return false;
                }
            )
        });
    }

    /**
     * Updates the provided state by performing a `SELECT FROM` operation on this table using the provided query options
     * @param options Query options
     * @returns Array of results
     */
    select(options: SelectOptions<T>, setState: React.Dispatch<React.SetStateAction<T[]>>) {
        // Parse the columns
        const cols = options.columns?.join(', ') ?? '*';
        let statement = `SELECT ${cols} FROM ${this.name}`;

        // Handle ORDER BY options
        if (options.orderBy != undefined) {
            statement += ' ORDER BY';
            const entries = Object.entries(options.orderBy);
            for (let i = 0; i < entries.length; i++) {
                const orderQuery = entries[i];
                statement += ` ${orderQuery[0]} ${orderQuery[1]}`;

                // To not put the comma after the last column
                if (i != entries.length - 1) {
                    statement += ',';
                }
            }
        }

        // Handle LIMIT options
        if (options.limit != undefined) {
            statement += ` LIMIT ${options.limit}`;
        }

        this.database.transaction(tx => {
            tx.executeSql(
                sql`${statement}`,
                undefined,
                (tx, resultSet) => {
                    setState(resultSet.rows._array);
                    console.log(`[OK] Executed a SELECT`);
                },
                (tx, err) => {
                    console.log(err);
                    return false;
                }
            )
        });
    }
    
    /**
     * Inserts a row into the table
     * @param row Row to insert into the table
     * @param successCallback Callback function to call after a successful transaction
     * @param errorCallback Callback function to call after a failed transaction
     */
    insert(row: T, successCallback?: () => void, errorCallback?: () => void) {
        const columns: string[] = [];
        const values: (string | number)[] = []; // don't input these directly into the SQL
        for (const [key, val] of Object.entries(row)) {
            columns.push(key);
            values.push(val);
        }

        const statement = `INSERT INTO ${this.name} (${columns.join(', ')}) VALUES (${Array(values.length).fill('?').join(', ')});`;
        this.database.transaction( tx => {
            tx.executeSql(
                statement,
                values,
                () => {
                    console.log(`[OK] Executed an INSERT`);
                    if (successCallback) successCallback();
                },
                (tx, err) => {
                    console.log(err);
                    if (errorCallback) errorCallback();
                    return false;
                }
            )
        });
    }
}