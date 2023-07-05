// DB
export interface PracticeItem {
    name: string;
    mastery: number;
}

export interface PracticeSession {
    itemName: string;
    seconds: number;
    timeStarted: number;
    rating: number;
}