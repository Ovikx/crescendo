import { SafeAreaView, Text, Pressable, Image } from 'react-native';
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
        <Pressable onPress={() => props.navigation.navigate(props.target as keyof RootStackParamList)}>
            <SafeAreaView className='flex-col justify-center top-2 items-center'>
                <Icon name={props.image} size={24} color='white' />
                <Text className='text-white text-xs'>{props.label}</Text>
            </SafeAreaView>
        </Pressable>
    );
}