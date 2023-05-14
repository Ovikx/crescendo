import { Text, SafeAreaView } from 'react-native';
import { Card } from './Card';
import { SearchBar } from './SearchBar';
import { PracticeItem } from './PracticeItem';

export const RecentList = () => {
    return (
        <SafeAreaView>
            <SafeAreaView className='mt-12'>
                <Text className="text-white text-2xl font-bold left-11">Recent items</Text>
                <SafeAreaView className='mx-auto w-11/12 mt-5'>
                    <Card>
                        <SafeAreaView className="">
                            <SafeAreaView>
                                <SearchBar />
                                <Text className='text-white text-3xl'>HELLO</Text>
                                <PracticeItem itemName='Greenpath'/>
                            </SafeAreaView>
                        </SafeAreaView>
                    </Card>
                </SafeAreaView>
                
            </SafeAreaView>
        </SafeAreaView>
    )
}