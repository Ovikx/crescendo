import { Text, SafeAreaView } from 'react-native';
import { Card } from './Card';
import { SafeAreaViewProps } from 'react-native-safe-area-context';
import { styled } from 'nativewind';
import { RecentSearchList } from './RecentSearchList';

interface PageProps extends SafeAreaViewProps {
    textStyle?: SafeAreaViewProps['style'];
}

const RecentListUnstyled = ({textStyle, ...props}: PageProps) => {
    return (
        <SafeAreaView style={textStyle}>
            <Text className="text-white text-2xl font-bold left-11">Recent items</Text>
            <SafeAreaView className='mx-auto w-11/12 mt-3'>
                <SafeAreaView className='h-3/4'>
                    <RecentSearchList />
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