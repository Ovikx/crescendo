import { SafeAreaView, Text, Image } from 'react-native';
import { Card } from './Card';
import { Icon } from '../../assets/Images';

interface Props {
    itemName: string;
    itemType: 'item' | 'list'
}
export const PracticeItem = (props: Props) => {
    return (
        <SafeAreaView className='shadow-sm shadow-black rounded-md bg-gray-800 flex-row justify-start items-center w-11/12 my-1'>
            <SafeAreaView className='ml-4 my-4'>
                <Icon name={props.itemType} size={32} color='white'/>
            </SafeAreaView>
            <Text className='text-white font-medium text-lg ml-4'>{props.itemName}</Text>
        </SafeAreaView>
    )
}