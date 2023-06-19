export enum ColumnTypes {
    INTEGER = 'INTEGER',
    TEXT = 'TEXT'
}

export type Table = {[k: string]: ColumnTypes};