import { SafeAreaView, Text, Pressable } from 'react-native';
import { Icon } from '../../assets/Images';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

interface Props {
    itemName: string;
    itemType: 'item' | 'list';
    navigation: NativeStackNavigationProp<RootStackParamList, keyof RootStackParamList, undefined>;
}
export const PracticeItemLight = (props: Props) => {
    return (
        <Pressable onPress={() => {
            props.navigation.navigate('Practice', {itemName: props.itemName, initialSeconds: 0});
        }}>
            <SafeAreaView className='shadow-sm shadow-black rounded-md bg-slate-800 flex-row justify-start items-center w-full my-1'>
                <SafeAreaView className='ml-4 my-4'>
                    <Icon name={props.itemType} size={32} color='white'/>
                </SafeAreaView>
                <Text className='flex-1 text-white font-medium text-lg ml-4 mr-8' ellipsizeMode='tail' numberOfLines={2} adjustsFontSizeToFit={true} minimumFontScale={0.5}>{props.itemName}</Text>
            </SafeAreaView>
        </Pressable>
    )
}