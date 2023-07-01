import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { Pressable, View, Text, SafeAreaView } from 'react-native';
import { TopBar } from '../components/TopBar';
import { Clock } from '../components/Clock';
import { useEffect, useState } from 'react';
import { PracticeToolsArray } from '../components/PracticeToolsArray';
import { PracticeToolButton } from '../components/PracticeToolButton';

type Props = NativeStackScreenProps<RootStackParamList, 'Practice'>;

export const Practice = ({navigation, route}: Props) => {
    const [seconds, setSeconds] = useState(route.params.initialSeconds);
    const [running, setRunning] = useState(true);
    const buttonColor = 'slate-800';

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

    const onCancelPress = () => {
        navigation.goBack();
        // TODO: add confirmation modal
    }

    const onDonePress = () => {
        navigation.goBack();
        // TODO: add session to DB
    }

    return (
        <View className='bg-slate-900 flex-1'>
            <TopBar label={route.params.itemName} />
            <Pressable className='flex items-center mt-24' onPress={onClockPress}>
                <Clock seconds={seconds} running={running} />
            </Pressable>
            <SafeAreaView className= 'flex flex-row justify-around w-11/12 mx-auto mt-32'>
                <PracticeToolButton bgColor={buttonColor} size={24} image='close' imageSize={48} text='Cancel' onPress={onCancelPress}/>
                <PracticeToolButton bgColor={buttonColor} size={24} image='done' imageSize={48} text='Done' onPress={onDonePress} />
            </SafeAreaView>
        </View>
    )
}