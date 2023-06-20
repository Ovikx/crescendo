import { ExpoORM } from '../../db-core';
import { Table } from '../../db-core/src/table';
import { PracticeItem, PracticeSession } from '../types/types';
import { ItemsMappings, PracticeSessionsMappings } from './tables';

export class ORMWrapper extends ExpoORM {
    itemsTable: Table<PracticeItem>;
    sessionsTable: Table<PracticeSession>;

    constructor(dbName: string) {
        super(dbName);
        
        // Initialize the tables
        this.itemsTable = this.initializeTable('items', ItemsMappings);
        this.sessionsTable = this.initializeTable('sessions', PracticeSessionsMappings);

        // Create the tables
        this.itemsTable.createTable();
        this.sessionsTable.createTable();
    }
}

export const DB = new ORMWrapper('db.crescendo');