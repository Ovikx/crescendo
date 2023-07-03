import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { View } from 'react-native';
import { TopBar } from '../components/TopBar';
import { useState, useEffect } from 'react';
import { PracticeSession } from '../types/types';
import { DB } from '../db/db';

type Props = NativeStackScreenProps<RootStackParamList, 'Sessions'>;

export const Sessions = ({navigation}: Props) => {
    const [sessions, setSessions] = useState<PracticeSession[]>([]);
    useEffect(() => {
        DB.sessionsTable.select({
            orderBy: [
                {column: 'timeStarted', ascending: false},
                {column: 'itemName', ascending: false}
            ]
        },
        setSessions);
    }, []);
    console.log(sessions);

    return (
        <View className='bg-slate-900 flex-1'>
            <TopBar label='Previous Sessions'/>
        </View>
    )
}