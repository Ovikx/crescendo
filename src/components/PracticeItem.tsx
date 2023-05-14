import { SafeAreaView, Text, Image } from 'react-native';
import { Card } from './Card';
import { Icon } from '../../assets/Images';

interface Props {
    itemName: string;
}
export const PracticeItem = (props: Props) => {
    return (
        <SafeAreaView className='shadow-sm shadow-black rounded-full bg-gray-800 flex-row justify-start items-center'>
            <SafeAreaView className='ml-4 my-4'>
                <Icon name='item' size={40} color='white'/>
            </SafeAreaView>
            <Text className='text-white font-medium text-lg ml-4'>{props.itemName}</Text>
        </SafeAreaView>
    )
}