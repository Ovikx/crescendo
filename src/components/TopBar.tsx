import { SafeAreaView, View } from "react-native";
import { Icon } from '../../assets/Images';
import { Text, Pressable } from 'react-native';

interface Props {
    label: string;
    children?: string | JSX.Element | JSX.Element[];
}

export const TopBar = ({children, label} : Props) => {
    return (
    <SafeAreaView className='bg-slate-800 shadow-sm shadow-black'>
        <SafeAreaView className='relative items-center'>
            <SafeAreaView className='absolute left-4 top-2'>
                <Pressable>
                    <Icon name='menu' color='white' size={32}/>
                </Pressable>
            </SafeAreaView>
            <Text className='text-white font-bold mx-auto top-2 text-xl pb-6'>{label}</Text>
        </SafeAreaView>
        {children}
    </SafeAreaView>
    );
}