import { Text, SafeAreaView } from 'react-native';
import { Card } from './Card';
import { SearchBar } from './SearchBar';
import { PracticeItem } from './PracticeItem';
import { SafeAreaViewProps } from 'react-native-safe-area-context';
import { styled } from 'nativewind';

interface PageProps extends SafeAreaViewProps {
    textStyle?: SafeAreaViewProps['style'];
}

const RecentListUnstyled = ({textStyle}: PageProps) => {
    return (
        <SafeAreaView style={textStyle}>
            <Text className="text-white text-2xl font-bold left-11">Recent items</Text>
            <SafeAreaView className='mx-auto w-11/12 mt-5'>
                <Card>
                    <SafeAreaView className="">
                        <SafeAreaView className='flex-col items-center'>
                            <SearchBar />
                            <PracticeItem itemName='Greenpath' itemType='item'/>
                            <PracticeItem itemName='Moonlight Sonata' itemType='item'/>
                            <PracticeItem itemName='Major Scales' itemType='list'/>
                        </SafeAreaView>
                    </SafeAreaView>
                </Card>
            </SafeAreaView>
        </SafeAreaView>
    )
}

export const RecentList = styled(RecentListUnstyled, {
    props: {
        textStyle: true
    }
})