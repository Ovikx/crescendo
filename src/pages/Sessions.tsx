import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { View } from 'react-native';
import { TopBar } from '../components/TopBar';
import { useState, useEffect } from 'react';
import { PracticeSession } from '../types/types';
import { DB } from '../db/db';
import { RecentList } from '../components/RecentList';

type Props = NativeStackScreenProps<RootStackParamList, 'Sessions'>;

export const Sessions = ({navigation}: Props) => {
    const [sessions, setSessions] = useState<PracticeSession[]>([]);
    useEffect(() => {
        DB.sessionsTable.select({
            orderBy: {
                timeStarted: 'DESC',
                itemName: 'ASC'
            }
        },
        setSessions);
    }, []);
    console.log(sessions);

    return (
        <View className='bg-slate-900 flex-1'>
            <TopBar label='Previous Sessions'/>
            <RecentList navigation={navigation}/>
        </View>
    )
}