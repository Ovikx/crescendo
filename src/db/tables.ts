import { ColumnConstraint, ColumnType, Columns } from 'expo-ink';
import { PracticeItem, PracticeSession } from '../types/types';

export const ItemsColumns: Columns<PracticeItem> = {
    name: {
        dataType: ColumnType.TEXT,
        constraints: [ColumnConstraint.PRIMARY_KEY, ColumnConstraint.UNIQUE]
    },
    mastery: {
        dataType: ColumnType.INTEGER,
        default: 0
    }
}

export const PracticeSessionsColumns: Columns<PracticeSession> = {
    itemName: {
        dataType: ColumnType.TEXT
    },
    seconds: {
        dataType: ColumnType.INTEGER
    },
    timeStarted: {
        dataType: ColumnType.INTEGER
    },
    rating: {
        dataType: ColumnType.INTEGER
    }
}