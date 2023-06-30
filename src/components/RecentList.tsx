import { Text, SafeAreaView } from 'react-native';
import { SafeAreaViewProps } from 'react-native-safe-area-context';
import { styled } from 'nativewind';
import { RecentSearchList } from './RecentSearchList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

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
                    <RecentSearchList navigation={navigation}/>
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