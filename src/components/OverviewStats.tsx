import { SafeAreaView, Text } from 'react-native';
import { Card } from './Card';
import { SafeAreaViewProps } from 'react-native-safe-area-context';
import { styled } from 'nativewind';
import { useState, useEffect } from 'react';
import { DB } from '../db/db';

interface PageProps extends SafeAreaViewProps {
    textStyle?: SafeAreaViewProps['style'];
}

const weekMs = 604800000;

function secondsToHours(seconds: number): number {
    return Math.round((seconds/3600)*10)/10
}

const OverviewStatsUnstyled = ({textStyle}: PageProps) => {
    const [totalSeconds, setTotalSeconds] = useState(0);
    const [recentSeconds, setRecentSeconds] = useState(0);

    useEffect(() => {
        DB.sessionsTable.sum('seconds').then(value => setTotalSeconds(value ?? 0));
        DB.sessionsTable.sum('seconds', {
            timeStarted: { $gte: Date.now() - weekMs}
        }).then(value => setRecentSeconds(value ?? 0));
    }, []);

    return (
        <SafeAreaView style={textStyle}>
            <Text className="text-white text-2xl font-bold left-11">Your stats</Text>
            <SafeAreaView className='mx-auto w-11/12 mt-3'>
                <Card color='bg-slate-800'>
                    <SafeAreaView className="flex-row">
                        <SafeAreaView className='flex-col items-center grow '>
                            <Text className="text-5xl text-white px-auto pt-8 font-bold">{secondsToHours(totalSeconds)}</Text>
                            <Text className='text-sm opacity-75 text-white pb-8'>total hours</Text>
                        </SafeAreaView>
                        <SafeAreaView className='h-[90%] w-px bg-white my-auto mx-auto'></SafeAreaView>
                        <SafeAreaView className='flex-col items-center grow'>
                            <Text className="text-5xl text-white px-auto pt-8 font-bold">{secondsToHours(recentSeconds)}</Text>
                            <Text className='text-sm opacity-75 text-white pb-8'>hours this week</Text>
                        </SafeAreaView>
                    </SafeAreaView>
                </Card>
            </SafeAreaView>
            
        </SafeAreaView>
    )
}

export const OverviewStats = styled(OverviewStatsUnstyled, {
    props: {
        textStyle: true
    }
});