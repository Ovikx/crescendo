/** Enum to represent the various SQL data types */
export enum ColumnTypes {
    Text = 'TEXT',
    Integer = 'INTEGER',
    Real = 'REAL',
    Blob = 'BLOB',
}

export type Columns<T> = {[k in keyof T]: ColumnTypes};

/** Options for querying rows from a table */
export interface SelectOptions<T> {
    /** The names of the columns to select. Do not pass this property for querying all columns (`"*"`) */
    columns?: Array<keyof T>;
    // TODO: add where 
    /** Maximum number of returned rows */
    limit?: number;
}

/** Each key is the version number to migrate from and the associate value is the SQL statement to execute (TODO: support multiple SQL statements) */
export type Migrations = {[k: number]: string};