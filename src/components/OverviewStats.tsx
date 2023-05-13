import { SafeAreaView, Text } from 'react-native';
import { Card } from './Card';

export const OverviewStats = () => {
    return (
        <SafeAreaView>
            <SafeAreaView className='mt-16'>
                <Text className="text-white text-2xl font-bold left-11">Your stats</Text>
                <SafeAreaView className='mx-auto w-11/12 mt-5'>
                    <Card>
                        <SafeAreaView className="flex-row">
                            <SafeAreaView className='flex-col items-center grow '>
                                <Text className="text-6xl text-white px-auto pt-8 font-bold">10</Text>
                                <Text className='text-sm opacity-75 text-white pb-8'>total hours</Text>
                            </SafeAreaView>
                            <SafeAreaView className='h-[90%] w-px bg-white my-auto mx-auto'></SafeAreaView>
                            <SafeAreaView className='flex-col items-center grow'>
                                <Text className="text-6xl text-white px-auto pt-8 font-bold">2.3</Text>
                                <Text className='text-sm opacity-75 text-white pb-8'>hours this week</Text>
                            </SafeAreaView>
                        </SafeAreaView>
                    </Card>
                </SafeAreaView>
                
            </SafeAreaView>
        </SafeAreaView>
    )
}