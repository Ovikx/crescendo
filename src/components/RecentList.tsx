import { Text, SafeAreaView } from 'react-native';
import { Card } from './Card';
import { SearchBar } from 'react-native-screens';
import { PracticeItem } from './PracticeItem';

export const RecentList = () => {
    return (
        <SafeAreaView>
            <SafeAreaView className='mt-12'>
                <Text className="text-white text-2xl font-bold left-11">Recent items</Text>
                <SafeAreaView className='mx-auto w-11/12 mt-5'>
                    <Card>
                        <SafeAreaView className="">
                            <SearchBar />
                            <SafeAreaView className='w-1/12'>
                                <PracticeItem itemName='Greenpath'/>
                            </SafeAreaView>
                        </SafeAreaView>
                    </Card>
                </SafeAreaView>
                
            </SafeAreaView>
        </SafeAreaView>
    )
}