import { PracticeItem } from '../../src/types/types';

/** Enum to represent the various SQL data types */
export enum ColumnTypes {
    Text = 'TEXT',
    Integer = 'INTEGER',
    Real = 'REAL',
    Blob = 'BLOB',
}

export type Columns<T> = {[k in keyof T]: ColumnTypes};

/** An object that represents a single table. Stores the table's name and the SQL data types of each column */
export interface Table<T> {
    /** The name of the table */
    tableName: string;
    /** Object literal mapping column names to their respective SQL data types */
    columns: Columns<T>;
}