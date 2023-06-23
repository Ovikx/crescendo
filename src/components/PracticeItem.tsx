import { SafeAreaView, Text } from 'react-native';
import { Icon } from '../../assets/Images';

interface Props {
    itemName: string;
    itemType: 'item' | 'list'
}
export const PracticeItem = (props: Props) => {
    return (
        <SafeAreaView className='shadow-sm shadow-black rounded-md bg-slate-800 flex-row justify-start items-center w-full my-1'>
            <SafeAreaView className='ml-4 my-4'>
                <Icon name={props.itemType} size={32} color='white'/>
            </SafeAreaView>
            <Text className='text-white font-medium text-lg ml-4'>{props.itemName}</Text>
        </SafeAreaView>
    )
}