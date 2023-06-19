export enum ColumnTypes {
    INTEGER = 'INTEGER',
    TEXT = 'TEXT'
}

export type Table<T> = {[k in keyof T]: ColumnTypes};