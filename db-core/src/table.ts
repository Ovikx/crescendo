import { Columns } from '../types/types';
import * as SQLite from 'expo-sqlite';

export class Table<T> {
    db: SQLite.WebSQLDatabase;
    name: string;
    columns: Columns<T>;

    constructor(db: SQLite.WebSQLDatabase, name: string, columns: Columns<T>) {
        this.db = db;
        this.name = name;
        this.columns = columns;
    }

    createTable() {
        const cols: string[] = [];
        for (const [colName, colType] of Object.entries(this.columns)) {
            cols.push(`${colName} ${colType}`);
        }
    
        const statement = `CREATE TABLE IF NOT EXISTS ${this.name} (${cols.join(', ')})`;
        this.db.transaction(
            tx => tx.executeSql(statement),
            e => console.log(`[ERR] ${e} | Executed SQL: ${statement}`),
            () => console.log(`[OK] Executed SQL: ${statement}`)
        ); // TODO: replace success callback with a user-provided callback
    }
}