import { ExpoORM } from '../../db-core';
import { Table } from '../../db-core/src/table';
import { Migrations } from '../../db-core/types/types';
import { PracticeItem, PracticeSession } from '../types/types';
import { migrations } from './migrations';
import { ItemsMappings, PracticeSessionsMappings } from './tables';

export class ORMWrapper extends ExpoORM {
    itemsTable: Table<PracticeItem>;
    sessionsTable: Table<PracticeSession>;

    constructor(dbName: string, version=0, migrations?: Migrations, autoMigrate=false) {
        super(dbName, version, migrations, autoMigrate);
        
        // Initialize the tables
        this.itemsTable = this.initializeTable('items', ItemsMappings);
        this.sessionsTable = this.initializeTable('sessions', PracticeSessionsMappings);

        // Create the tables
        this.itemsTable.createTable();
        this.sessionsTable.createTable()
    }
}

export const DB = new ORMWrapper('db.crescendo', 2, migrations, true);