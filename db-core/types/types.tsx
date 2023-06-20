import { PracticeItem } from '../../src/types/types';

/** Enum to represent the various SQL data types */
export enum ColumnTypes {
    Text = 'TEXT',
    Integer = 'INTEGER',
    Real = 'REAL',
    Blob = 'BLOB',
}

export type Columns<T> = {[k in keyof T]: ColumnTypes};