import { Columns, Table } from '../types/types';

/**
 * Returns a Table object to pass to the ORM
 * @param tableName Name of the table
 * @param columns Object literal mapping column names to their respective data types
 * @returns Table object to pass to the ORM
 */
export function createTable<T>(tableName: string, columns: Columns<T>): Table<T> {
    return {
        tableName,
        columns
    };
}