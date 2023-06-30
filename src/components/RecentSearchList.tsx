import { SafeAreaView, ScrollView } from 'react-native';
import { PracticeItemLight } from './PracticeItemLight';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

interface Props {
    navigation: NativeStackNavigationProp<RootStackParamList, keyof RootStackParamList, undefined>;
}

export const RecentSearchList = ({navigation}: Props) => {
    return (
        <SafeAreaView className='flex-col items-center h-auto flex-1'>
            <ScrollView className='w-full mt-3' indicatorStyle='white'>
                <SafeAreaView className='flex-col items-center w-full mx-auto'>
                    <PracticeItemLight itemName='Greenpath' itemType='item' navigation={navigation}/>
                    <PracticeItemLight itemName='Moonlight Sonata' itemType='item' navigation={navigation}/>
                    <PracticeItemLight itemName='Major Scales' itemType='list' navigation={navigation}/>
                    <PracticeItemLight itemName='Prelude in C-sharp Minor' itemType='item' navigation={navigation}/>
                    <PracticeItemLight itemName='Prelude in C-sharp Minor' itemType='item' navigation={navigation}/>
                    <PracticeItemLight itemName='Prelude in C-sharp Minor' itemType='item' navigation={navigation}/>
                    <PracticeItemLight itemName='Prelude in C-sharp Minor' itemType='item' navigation={navigation}/>
                </SafeAreaView>
            </ScrollView>
            <SafeAreaView className=''/>
        </SafeAreaView>
    );
}