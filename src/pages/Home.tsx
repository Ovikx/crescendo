import { Dimensions, SafeAreaView, Text } from "react-native"
import { OverviewStats as OverviewStats } from '../components/OverviewStats';
import { RecentList } from '../components/RecentList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavBar } from '../components/NavBar';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home = ({route, navigation}: Props) => {
    const screenSize = Dimensions.get('window').height;

    return (
        <SafeAreaView className="bg-gray-800 flex-1">
            <SafeAreaView className=''>
                <OverviewStats textStyle='mt-16'/>
                <RecentList textStyle='mt-6' />
            </SafeAreaView>
            <SafeAreaView className='bottom-0 absolute'>
                <NavBar navigation={navigation}/>
            </SafeAreaView>
        </SafeAreaView>
    );
}