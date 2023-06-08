import { SafeAreaView, Pressable } from 'react-native';
import { Icon } from '../../assets/Images';

export const FloatingAddButton = () => {
    return (
        <SafeAreaView className='absolute bg-slate-700 rounded-full shadow-md'>
            <Pressable className='p-5'>
                <SafeAreaView className='left-1'><Icon name='item' size={48} color='white' /></SafeAreaView>
                <SafeAreaView className='absolute top-1/3 left-1/3'><Icon name='add' size={32} color='white' /></SafeAreaView>
            </Pressable>
        </SafeAreaView>
    )
}