import { SafeAreaView, Text, Pressable } from 'react-native';
import { NavButton } from './NavButton';

export const NavBar = () => {
    return (
        <SafeAreaView className='flex-row w-full h-20 bg-gray-900 justify-evenly '>
            <NavButton label='HOME'/>
            <NavButton label='ITEMS'/>
            <NavButton label='LISTS'/>
        </SafeAreaView>
    );
}