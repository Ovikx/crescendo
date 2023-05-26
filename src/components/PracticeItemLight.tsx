import { SafeAreaView, Text, Image } from 'react-native';
import { Card } from './Card';
import { Icon } from '../../assets/Images';

interface Props {
    itemName: string;
    itemType: 'item' | 'list'
}
export const PracticeItemLight = (props: Props) => {
    return (
        <SafeAreaView className='shadow-sm shadow-black rounded-md bg-gray-800 flex-row justify-start items-center w-full my-1'>
            <SafeAreaView className='ml-4 my-4'>
                <Icon name={props.itemType} size={32} color='white'/>
            </SafeAreaView>
            <Text className='flex-1 text-white font-medium text-lg ml-4 mr-8' ellipsizeMode='tail' numberOfLines={1}>{props.itemName}</Text>
        </SafeAreaView>
    )
}