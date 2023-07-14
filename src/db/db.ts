import { ExpoSQLiteORM } from 'expo-ink';
import { migrations } from './migrations';
import { ItemsColumns, PracticeSessionsColumns } from './tables';

export const db = new ExpoSQLiteORM('db.crescendo', 2, migrations, true);
export const itemsTable = db.initializeTable('items', ItemsColumns, true);
export const sessionsTable = db.initializeTable('sessions', PracticeSessionsColumns, true)