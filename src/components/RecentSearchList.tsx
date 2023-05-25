import { Text, SafeAreaView, TextInput, ScrollView, Dimensions } from 'react-native';
import { PracticeItem } from './PracticeItem';
import { Icon } from '../../assets/Images';

export const RecentSearchList = () => {
    return (
        <SafeAreaView className='flex-col items-center h-auto flex-1'>
            <SafeAreaView className='rounded-full bg-gray-700 flex-row h-10 p-2 w-3/4 my-4 items-center'>
                <SafeAreaView className='ml-4'>
                    <Icon name='search' size={30} color='#aaaaaa'/>
                </SafeAreaView>
                <TextInput 
                    className='h-8 flex-1 ml-4 grow'
                    placeholder='Search'
                    placeholderTextColor='#aaaaaa'
                    
                />
            </SafeAreaView>
            <ScrollView className='w-full' indicatorStyle='white'>
                <SafeAreaView className='flex-col items-center'>
                    <PracticeItem itemName='Greenpath' itemType='item'/>
                    <PracticeItem itemName='Moonlight Sonata' itemType='item'/>
                    <PracticeItem itemName='Major Scales' itemType='list'/>
                    <PracticeItem itemName='Prelude in C-sharp Minor' itemType='item'/>
                    <PracticeItem itemName='Prelude in C-sharp Minor' itemType='item'/>
                    <PracticeItem itemName='Prelude in C-sharp Minor' itemType='item'/>
                    <PracticeItem itemName='Prelude in C-sharp Minor' itemType='item'/>
                </SafeAreaView>
            </ScrollView>
            <SafeAreaView className=''/>
        </SafeAreaView>
    );
}