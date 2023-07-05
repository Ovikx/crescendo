import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { SectionList, View } from 'react-native';
import { TopBar } from '../components/TopBar';
import { useState, useEffect } from 'react';
import { PracticeSession } from '../types/types';
import { DB } from '../db/db';
import { SessionCard } from '../components/SessionCard';
import { SessionSectionHeader } from '../components/SessionSectionHeader';
import { NavBar } from '../components/NavBar';

const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
};

type Props = NativeStackScreenProps<RootStackParamList, 'Sessions'>;

export const Sessions = ({navigation}: Props) => {
    const [sessions, setSessions] = useState<PracticeSession[]>([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            DB.sessionsTable.select({
                orderBy: {
                    timeStarted: 'DESC',
                    itemName: 'ASC'
                }
            },
            setSessions);
        });

        return unsubscribe;
    }, [navigation]);
    
    // Separate sessions by day
    const sectioned: Map<string, PracticeSession[]> = new Map();
    for (const session of sessions) {
        const sessionDate = new Date(session.timeStarted);
        const fmttedDate = `${months[sessionDate.getMonth() as keyof typeof months]} ${sessionDate.getDate()}, ${sessionDate.getFullYear()}`;
        if (!sectioned.has(fmttedDate)) {
            sectioned.set(fmttedDate, []);
        }

        sectioned.get(fmttedDate)?.push(session);
    }

    // Convert hash map into SectionList-compatible data
    const DATA: {title: string, data: PracticeSession[]}[] = [];
    for (const [sessionDate, sessions] of sectioned) {
        DATA.push({
            title: sessionDate,
            data: sessions
        });
    }

    return (
        <View className='bg-slate-900 flex-1'>
            <TopBar label='Previous Sessions'/>
            <View className='flex-1 w-11/12 mx-auto'>
                <SectionList
                    sections={DATA}
                    renderItem={({item}) => {
                        return (
                            <View className='py-1'>
                                <SessionCard
                                    name={item.itemName}
                                    timeSpent={item.seconds}
                                />
                            </View>
                        );
                    }}
                    renderSectionHeader={({section}) => {
                        return (
                            <SessionSectionHeader title={section.title}/>
                        )
                    }}
                />
            </View>
            <NavBar navigation={navigation}/>
        </View>
    )
}