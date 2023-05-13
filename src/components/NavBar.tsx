import { SafeAreaView, Text, Pressable } from 'react-native';
import { NavButton } from './NavButton';
import { home, item, list } from '../../assets/Images';

export const NavBar = () => {
    return (
        <SafeAreaView className='flex-row w-full h-20 bg-gray-900 justify-evenly'>
            <NavButton label='HOME' image={home}/>
            <NavButton label='ITEMS' image={item}/>
            <NavButton label='LISTS' image={list}/>
        </SafeAreaView>
    );
}