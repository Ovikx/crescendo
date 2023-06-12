import { Text, SafeAreaView, TextInput, ScrollView, Dimensions } from 'react-native';
import { PracticeItem } from './PracticeItem';
import { Icon } from '../../assets/Images';
import { PracticeItemLight } from './PracticeItemLight';

export const RecentSearchList = () => {
    return (
        <SafeAreaView className='flex-col items-center h-auto flex-1'>
            <ScrollView className='w-full mt-3' indicatorStyle='white'>
                <SafeAreaView className='flex-col items-center w-full mx-auto'>
                    <PracticeItemLight itemName='Greenpath' itemType='item'/>
                    <PracticeItemLight itemName='Moonlight Sonata' itemType='item'/>
                    <PracticeItemLight itemName='Major Scales' itemType='list'/>
                    <PracticeItemLight itemName='Prelude in C-sharp Minor' itemType='item'/>
                    <PracticeItemLight itemName='Prelude in C-sharp Minor' itemType='item'/>
                    <PracticeItemLight itemName='Prelude in C-sharp Minor' itemType='item'/>
                    <PracticeItemLight itemName='Prelude in C-sharp Minor' itemType='item'/>
                </SafeAreaView>
            </ScrollView>
            <SafeAreaView className=''/>
        </SafeAreaView>
    );
}