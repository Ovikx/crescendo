import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { Pressable, View } from 'react-native';
import { TopBar } from '../components/TopBar';
import { Clock } from '../components/Clock';
import { useEffect, useState } from 'react';

type Props = NativeStackScreenProps<RootStackParamList, 'Practice'>;

export const Practice = ({navigation, route}: Props) => {
    const [seconds, setSeconds] = useState(route.params.initialSeconds);
    const [running, setRunning] = useState(true);

    useEffect(() => {
        if (running) {
            const timer = setTimeout(() => {
                setSeconds(seconds + 1);
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [seconds, running]);

    const onClockPress = () => {
        setRunning(!running);
    }

    return (
        <View className='bg-slate-900 flex-1'>
            <TopBar label={route.params.itemName} />
            <Pressable className='flex-1 items-center mt-24' onPress={onClockPress}>
                <Clock seconds={seconds} running={running} />
            </Pressable>
        </View>
    )
}