import * as SQLite from 'expo-sqlite';
import { Columns, Table } from './types/types';

export class ExpoORM {
    db: SQLite.WebSQLDatabase;
    tables: {[k: string]: Columns<unknown>};

    /**
     * 
     * @param dbName Name of the database
     * @param tables Array of Table objects (use the external `createTable` function to create each table if you don't want to provide object literals)
     */
    constructor(dbName: string, tables?: Table<unknown>[]) {
        this.db = SQLite.openDatabase(dbName);
        this.tables = {};
        if (tables) {
            for (const table of tables) {
                this.tables[table.tableName] = table.columns;
                this.createTable(table.tableName, table.columns);
            }
        }
    }

    /**
     * Adds a table to this instance internally (does not `CREATE TABLE`; use `createTable` for that)
     * @param tableName Name of the table
     * @param columns An object literal mapping column names to their respective data types
     */
    addTable<T>(tableName: string, columns: Columns<T>) {
        this.tables[tableName] = columns;
    }

    /**
     * Creates a table using the specified table name and table object
     * @param tableName Name of the table
     * @param columns An object literal mapping column names to their respective data types
     */
    createTable<T>(tableName: string, columns: Columns<T>) {
        // Add the table to this instance if it already hasn't been added
        if (!this.tables[tableName]) this.addTable(tableName, columns);
        const cols: string[] = [];
        for (const [colName, colType] of Object.entries(columns)) {
            cols.push(`${colName} ${colType}`);
        }
    
        const statement = `CREATE TABLE IF NOT EXISTS ${tableName} (${cols.join(', ')})`;
        this.db.transaction(
            tx => tx.executeSql(statement),
            e => console.log(`[ERR] ${e} | Executed SQL: ${statement}`),
            () => console.log(`[OK] Executed SQL: ${statement}`)
        ); // TODO: replace success callback with a user-provided callback
    }
}