import { ExpoORM } from '../../db-core';
import { createTable } from '../../db-core/src/utils';
import { Table } from '../../db-core/types/types';
import { ItemsMappings, PracticeSessionsMappings } from './tables';

const tables = [
    createTable('items', ItemsMappings),
    createTable('sessions', PracticeSessionsMappings)
]

class ORMWrapper extends ExpoORM {
    constructor(dbName: string, tables: Table<unknown>[]) {
        super(dbName, tables);
        console.log(this.tables);
    }
}

export const DB = new ORMWrapper('db.crescendo', tables);