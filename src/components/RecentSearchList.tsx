import { Text, SafeAreaView, TextInput, ScrollView, Dimensions } from 'react-native';
import { PracticeItem } from './PracticeItem';
import { Icon } from '../../assets/Images';

export const RecentSearchList = () => {
    return (
        <SafeAreaView className='flex-col items-center h-auto flex-1'>
            <ScrollView className='w-full mt-3' indicatorStyle='white'>
                <SafeAreaView className='flex-col items-center w-11/12 mx-auto'>
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