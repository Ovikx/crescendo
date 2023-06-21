import * as SQLite from 'expo-sqlite';
import { Columns } from '../types/types';
import { Table } from './table';

export class ExpoORM {
    /** The WebSQLDatabase object */
    database: SQLite.WebSQLDatabase;

    /**
     * 
     * @param dbName Name of the database
     */
    constructor(dbName: string) {
        this.database = SQLite.openDatabase(dbName);
    }

    /**
     * Returns a Table using the specified table name and columns mapping
     * @param tableName Name of the table
     * @param columns An object literal mapping column names to their respective data types
     * @returns An SQL Table object that can perform CRUD operations
     */
    initializeTable<T extends Object>(tableName: string, columns: Columns<T>): Table<T> {
        return new Table(this.database, tableName, columns);
    }
}