import { SafeAreaView, View } from "react-native";
import { Icon } from '../../assets/Images';
import { Text } from 'react-native';

interface Props {
    label: string;
    children?: string | JSX.Element | JSX.Element[];
}

export const TopBar = ({children, label} : Props) => {
    return (
    <SafeAreaView className='bg-gray-800'>
        <SafeAreaView className='relative items-center'>
            <SafeAreaView className='absolute left-4 top-2'>
                <Icon name='menu' color='white' size={32}/>
            </SafeAreaView>
            <Text className='text-white font-bold mx-auto top-2 text-xl pb-6'>{label}</Text>
        </SafeAreaView>
        {children}
    </SafeAreaView>
    );
}