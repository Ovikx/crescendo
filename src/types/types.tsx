import { ColumnTypes } from '../../db-core/types/types';
import { Columns } from '../../db-core/types/types';

// DB
export interface PracticeItem {
    name: string;
    mastery: number;
}

export interface PracticeSession {
    itemName: string;
    seconds: number;
}