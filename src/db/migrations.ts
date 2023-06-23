import { sql } from '../../db-core/src/utils';
import { Migrations } from '../../db-core/types/types';

export const migrations: Migrations = {
    0: sql`PRAGMA user_version`
}