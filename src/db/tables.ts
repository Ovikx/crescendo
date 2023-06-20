import { ColumnTypes, Columns } from '../../db-core/types/types';
import { PracticeItem, PracticeSession } from '../types/types';

export const ItemsMappings: Columns<PracticeItem> = {
    name: ColumnTypes.Text,
    mastery: ColumnTypes.Integer
}

export const PracticeSessionsMappings: Columns<PracticeSession> = {
    itemName: ColumnTypes.Text,
    seconds: ColumnTypes.Integer
}