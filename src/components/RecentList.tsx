import { Text, SafeAreaView, ScrollView } from 'react-native';
import { SafeAreaViewProps } from 'react-native-safe-area-context';
import { styled } from 'nativewind';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { PracticeItemLight } from './PracticeItemLight';

interface PageProps extends SafeAreaViewProps {
    textStyle?: SafeAreaViewProps['style'];
    navigation: NativeStackNavigationProp<RootStackParamList, keyof RootStackParamList, undefined>;
}

const RecentListUnstyled = ({textStyle, navigation}: PageProps) => {
    return (
        <SafeAreaView style={textStyle}>
            <Text className="text-white text-2xl font-bold left-11">Recent items</Text>
            <SafeAreaView className='mx-auto w-11/12 mt-3'>
                <SafeAreaView className='h-3/4'>
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
                </SafeAreaView>
            </SafeAreaView>
        </SafeAreaView>
    )
}

export const RecentList = styled(RecentListUnstyled, {
    props: {
        textStyle: true
    }
});