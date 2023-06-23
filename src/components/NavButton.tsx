import { SafeAreaView, Text, Pressable } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { Icon } from '../../assets/Images';

type Props = {
    label: string;
    image: string;
    target: string;
    navigation: NativeStackNavigationProp<RootStackParamList, keyof RootStackParamList, undefined>;
}

export const NavButton = (props: Props) => {
    return (
        <Pressable className='px-10' onPress={() => props.navigation.navigate(props.target as keyof RootStackParamList)}>
            <SafeAreaView className='flex-col justify-center top-2 items-center'>
                <Icon name={props.image} size={24} color='gray' />
                <Text className='text-slate-500 text-xs'>{props.label}</Text>
            </SafeAreaView>
        </Pressable>
    );
}