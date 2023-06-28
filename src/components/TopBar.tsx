import { SafeAreaView } from "react-native";
import { Text } from 'react-native';

interface Props {
    label: string;
    children?: string | JSX.Element | JSX.Element[];
}

export const TopBar = ({children, label} : Props) => {
    return (
        <SafeAreaView className='bg-slate-800 shadow-sm shadow-black'>
            <SafeAreaView className='relative items-center'>
                <Text className='text-white font-bold mx-auto top-3 text-xl pb-6'>{label}</Text>
            </SafeAreaView>
            
            {children}
            
        </SafeAreaView>
    );
}