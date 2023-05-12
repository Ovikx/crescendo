import { SafeAreaView, Text, Pressable } from 'react-native';

export const NavBar = () => {
    return (
        <SafeAreaView className='flex-row w-full h-20 bg-gray-900 justify-evenly '>
            <Pressable><Text className='text-white'>HOME</Text></Pressable>
            <Pressable><Text className='text-white'>ITEMS</Text></Pressable>
            <Pressable><Text className='text-white'>LISTS</Text></Pressable>
        </SafeAreaView>
    );
}