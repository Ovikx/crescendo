import { Text, SafeAreaView, FlatList } from 'react-native';
import { SafeAreaViewProps } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { PracticeItemLight } from './PracticeItemLight';
import { useState, useEffect } from 'react';
import { DB } from '../db/db';
import { PracticeSession } from '../types/types';

interface PageProps extends SafeAreaViewProps {
    navigation: NativeStackNavigationProp<RootStackParamList, keyof RootStackParamList, undefined>;
}

export const RecentList = ({ navigation }: PageProps) => {
    const [sessions, setSessions] = useState<PracticeSession[]>([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            DB.sessionsTable.select({
                limit: 5,
                orderBy: {
                    timeStarted: 'DESC'
                }
            }, setSessions);
        });

        return unsubscribe;
    }, [navigation]);

    const DATA: { id: string, title: string }[] = [];
    const seen: Set<string> = new Set();
    for (const session of sessions) {
        if (!seen.has(session.itemName)) {
            seen.add(session.itemName);
            DATA.push({ id: session.itemName, title: session.itemName });
        }
    }

    const items: JSX.Element[] = [];
    for (const session of sessions) {
        items.push(<PracticeItemLight itemName={session.itemName} itemType='item' navigation={navigation} key={session.timeStarted} />);
    }

    return (
        <SafeAreaView>
            <Text className="text-white text-2xl font-bold left-11">Recent items</Text>
            <SafeAreaView className='mx-auto w-11/12 mt-3'>
                <SafeAreaView className='h-4/5'>
                    <SafeAreaView className='flex-col items-center h-auto flex-1'>
                        <FlatList
                            className='w-full'
                            data={DATA}
                            renderItem={({ item }) => {
                                return (
                                    <PracticeItemLight itemName={item.title} itemType='item' navigation={navigation} />
                                )
                            }}
                        />
                    </SafeAreaView>
                </SafeAreaView>
            </SafeAreaView>
        </SafeAreaView>
    )
}