import { ColumnTypes, Table } from '../../db-core/types/types';
import { PracticeItem } from '../types/types';

export const ItemsTable: Table<PracticeItem> = {
    name: ColumnTypes.TEXT,
    mastery: ColumnTypes.INTEGER
}