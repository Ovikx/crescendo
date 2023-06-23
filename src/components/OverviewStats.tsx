import { SafeAreaView, Text } from 'react-native';
import { Card } from './Card';
import { SafeAreaViewProps } from 'react-native-safe-area-context';
import { styled } from 'nativewind';

interface PageProps extends SafeAreaViewProps {
    textStyle?: SafeAreaViewProps['style'];
}

const OverviewStatsUnstyled = ({textStyle}: PageProps) => {
    return (
        <SafeAreaView style={textStyle}>
            <Text className="text-white text-2xl font-bold left-11">Your stats</Text>
            <SafeAreaView className='mx-auto w-11/12 mt-3'>
                <Card color='bg-slate-800'>
                    <SafeAreaView className="flex-row">
                        <SafeAreaView className='flex-col items-center grow '>
                            <Text className="text-5xl text-white px-auto pt-8 font-bold">10</Text>
                            <Text className='text-sm opacity-75 text-white pb-8'>total hours</Text>
                        </SafeAreaView>
                        <SafeAreaView className='h-[90%] w-px bg-white my-auto mx-auto'></SafeAreaView>
                        <SafeAreaView className='flex-col items-center grow'>
                            <Text className="text-5xl text-white px-auto pt-8 font-bold">2.3</Text>
                            <Text className='text-sm opacity-75 text-white pb-8'>hours this week</Text>
                        </SafeAreaView>
                    </SafeAreaView>
                </Card>
            </SafeAreaView>
            
        </SafeAreaView>
    )
}

export const OverviewStats = styled(OverviewStatsUnstyled, {
    props: {
        textStyle: true
    }
});