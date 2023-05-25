import { Dimensions, SafeAreaView, Text, View } from "react-native"
import { OverviewStats } from '../components/OverviewStats';
import { RecentList } from '../components/RecentList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavBar } from '../components/NavBar';
import { RootStackParamList } from '../navigation/types';
import { TopBar } from '../components/TopBar';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home = ({route, navigation}: Props) => {
    const screenSize = Dimensions.get('window').height;

    return (
        <View className="bg-gray-900 flex-1">
            <TopBar label='Home'/>
            <SafeAreaView className='flex-1'>
                
                <SafeAreaView className=''>
                    <OverviewStats textStyle='mt-10'/>
                    <RecentList textStyle='mt-6' />
                </SafeAreaView>
                <SafeAreaView className='bottom-0 absolute'>
                    <NavBar navigation={navigation}/>
                </SafeAreaView>
            </SafeAreaView>
        </View>
    );
}