import { ExpoORM } from '../../db-core';
import { TableObj } from '../../db-core/src/table';
import { ItemsMappings, PracticeSessionsMappings } from './tables';

const tables = [
    new TableObj('items', ItemsMappings),
    new TableObj('sessions', PracticeSessionsMappings)
]

export class ORMWrapper extends ExpoORM {
    constructor(dbName: string, tables: TableObj<unknown>[]) {
        super(dbName, tables);
        console.log(this.tables);
    }
}

export const DB = new ORMWrapper('db.crescendo', tables);