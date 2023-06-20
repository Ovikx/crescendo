import { Columns } from '../types/types';

export class TableObj<T> {
    name: string;
    columns: Columns<T>;

    constructor(name: string, columns: Columns<T>) {
        this.name = name;
        this.columns = columns;
    }
}