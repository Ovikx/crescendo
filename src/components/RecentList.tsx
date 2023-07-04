import { Text, SafeAreaView, ScrollView } from 'react-native';
import { SafeAreaViewProps } from 'react-native-safe-area-context';
import { styled } from 'nativewind';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { PracticeItemLight } from './PracticeItemLight';
import { useState, useEffect } from 'react';
import { DB } from '../db/db';
import { PracticeItem, PracticeSession } from '../types/types';

interface PageProps extends SafeAreaViewProps {
    navigation: NativeStackNavigationProp<RootStackParamList, keyof RootStackParamList, undefined>;
}

export const RecentList = ({ navigation}: PageProps) => {
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

    const items: JSX.Element[] = [];
    for (const session of sessions) {
        items.push(<PracticeItemLight itemName={session.itemName} itemType='item' navigation={navigation} key={session.timeStarted}/>);
    }

    return (
        <SafeAreaView>
            <Text className="text-white text-2xl font-bold left-11">Recent items</Text>
            <SafeAreaView className='mx-auto w-11/12 mt-3'>
                <SafeAreaView className='h-3/4'>
                <SafeAreaView className='flex-col items-center h-auto flex-1'>
                <ScrollView className='w-full mt-3' indicatorStyle='white'>
                    <SafeAreaView className='flex-col items-center w-full mx-auto'>
                        {items.length > 0 ? items : <Text className='text-white font-bold text-2xl text-center'>No recent items...</Text>}
                    </SafeAreaView>
                </ScrollView>
            <SafeAreaView className=''/>
        </SafeAreaView>
                </SafeAreaView>
            </SafeAreaView>
        </SafeAreaView>
    )
}