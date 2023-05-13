import { SafeAreaView, Text, Pressable, Image } from 'react-native';
import { home, item, list } from '../../assets/Images';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = {
    label: string;
    image: any;
    target: string;
    navigation: NativeStackNavigationProp<RootStackParamList, keyof RootStackParamList, undefined>;
}

export const NavButton = (props: Props) => {
    return (
        <Pressable onPress={() => props.navigation.navigate(props.target as keyof RootStackParamList)}>
            <SafeAreaView className='flex-col justify-center top-2'>
                <Image source={props.image} className='h-10 w-10'></Image>
                <Text className='text-white'>{props.label}</Text>
            </SafeAreaView>
        </Pressable>
    );
}