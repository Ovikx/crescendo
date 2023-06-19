import * as SQLite from 'expo-sqlite';
import { Table } from '../types/types';
import { ItemsTable } from './tables';

class DBHandler {
    db: SQLite.WebSQLDatabase;

    constructor(dbName: string) {
        this.db = SQLite.openDatabase(dbName);
    }

    /**
     * Creates a table using the specified table name and table object
     * @param tableName Name of the table
     * @param columns An object mapping column names to their respective data types
     */
    createTable(tableName: string, columns: Table) {
        const cols: string[] = [];
        for (const [colName, colType] of Object.entries(columns)) {
            cols.push(`${colName} ${colType}`);
        }
    
        const statement = `CREATE TABLE IF NOT EXISTS ${tableName} (${cols.join(', ')})`;
        this.db.transaction(
            tx => tx.executeSql(statement),
            e => console.log(`[ERR] ${e} | Executed SQL: ${statement}`),
            () => console.log(`[OK] Executed SQL: ${statement}`)
        );
    }
}

export const DB = new DBHandler('db.crescendo');