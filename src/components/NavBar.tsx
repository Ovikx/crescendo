import { SafeAreaView, Text, Pressable } from 'react-native';
import { NavButton } from './NavButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, keyof RootStackParamList, undefined>;
}

export const NavBar = ({navigation}: Props) => {
    return (
        <SafeAreaView className='flex-row w-full h-16 bg-gray-900 justify-evenly'>
            <NavButton label='HOME' image='home' target='Home' navigation={navigation}/>
            <NavButton label='ITEMS' image='item' target='PracticeItems' navigation={navigation}/>
            <NavButton label='LISTS' image='list' target='PracticeLists' navigation={navigation}/>
        </SafeAreaView>
    );
}