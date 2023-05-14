import { Text, SafeAreaView, TextInput } from 'react-native';
import { PracticeItem } from './PracticeItem';
import { Icon } from '../../assets/Images';

export const RecentSearchList = () => {
    return (
        <SafeAreaView className='flex-col items-center'>
            <SafeAreaView className='rounded-full bg-gray-600 flex-row h-10 p-2 w-3/4 my-4 items-center'>
                <SafeAreaView className='ml-4'>
                    <Icon name='search' size={30} color='#aaaaaa'/>
                </SafeAreaView>
                <TextInput 
                    className='h-8 flex-1 ml-4 grow'
                    placeholder='Search'
                    placeholderTextColor='#aaaaaa'
                    
                />
            </SafeAreaView>
            <PracticeItem itemName='Greenpath' itemType='item'/>
            <PracticeItem itemName='Moonlight Sonata' itemType='item'/>
            <PracticeItem itemName='Major Scales' itemType='list'/>
            <SafeAreaView className='mb-1' />
        </SafeAreaView>
    );
}