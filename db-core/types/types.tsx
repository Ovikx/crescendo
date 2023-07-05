/** Enum to represent the various SQL data types */
export enum ColumnType {
    TEXT = 'TEXT',
    INTEGER = 'INTEGER',
    REAL = 'REAL',
}

/** Constraints for a column (note: `DEFAULT` is omitted because it is already found as an optional property on ColumnDefinition) */
export enum ColumnConstraint {
    NOT_NULL = 'NOT NULL',
    UNIQUE = 'UNIQUE',
    PRIMARY_KEY = 'PRIMARY KEY'
}

/** For internal use. Maps ORM-defined enum data types to default Typescript types */
export type DataTypeMapping = {
    [ColumnType.TEXT]: string,
    [ColumnType.INTEGER]: number,
    [ColumnType.REAL]: number,
}

/** For internal use. Maps ORM-defined enum data types to default Typescript types */
export type RevDataTypeMapping = {
    string: ColumnType.TEXT,
    number: ColumnType.INTEGER | ColumnType.REAL,
}

export type Columns<T extends object> = {[k in keyof T]: ColumnDefinition<ColumnType>};

/** Stores the data type and constraints for a column */
export interface ColumnDefinition<T extends ColumnType> {
    dataType: T;
    constraints?: ColumnConstraint[];
    default?: DataTypeMapping[T];
}


export type SortOrder = 'ASC' | 'DESC';

/** Options for querying rows from a table */
export interface SelectOptions<T> {
    /** The names of the columns to select. Do not pass this property for querying all columns (`"*"`) */
    columns?: Array<keyof T>;
    // TODO: add where
    where?: WhereOptions<T>;
    /** Maximum number of returned rows */
    limit?: number;
    /** Sort order */
    orderBy?: {[k in keyof Partial<T>]: SortOrder}
}

export type WhereOptions<T> = {[k in keyof Partial<T>]: WhereOperators<T, k>}

export interface WhereOperators<T, K extends keyof T> {
    eq?: T[K];
    neq?: T[K];
    lt?: T[K];
    lte?: T[K];
    gt?: T[K];
    gte?: T[K];
}

/** Each key is the version number to migrate from and the associate value is the SQL statement to execute (TODO: support multiple SQL statements) */
export type Migrations = {[k: number]: string[]};