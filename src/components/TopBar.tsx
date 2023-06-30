import { Pressable, SafeAreaView, View } from "react-native";
import { Text } from 'react-native';
import { Icon } from '../../assets/Images';
import { useContext } from 'react';
import { SideBarContext } from './SideNavBarContainer';

interface Props {
    label: string;
    children?: string | JSX.Element | JSX.Element[];
}

export const TopBar = ({children, label} : Props) => {
    const onMenuPress = useContext(SideBarContext);

    return (
        <View className='bg-slate-800 shadow-sm shadow-black'>

            <SafeAreaView className='relative items-center top-2 flex flex-row place-content-evenly'>
                <SafeAreaView className='ml-6 flex-1'>
                    <Pressable onPress={onMenuPress} hitSlop={5}>
                        <Icon name='menu' color='white' size={32}/>
                    </Pressable>
                </SafeAreaView>
                <Text className='text-white font-bold mx-auto text-xl pb-6 mt-4 -translate-x-2'>{label}</Text>
                <View className='flex-1'></View>
            </SafeAreaView>
            
            {children}
            
        </View>
    );
}