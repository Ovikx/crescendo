import { SafeAreaView, Text } from "react-native"
import { OverviewStats } from '../components/OverviewStats';
import { RecentList } from '../components/RecentList';
import { Card } from '../components/Card';
import { RootStackParamList, Stack } from '../navigation/stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavBar } from '../components/NavBar';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home = ({route, navigation}: Props) => {
    return (
        <SafeAreaView className="bg-gray-800 flex-1">
            <OverviewStats />
            <RecentList />
            <SafeAreaView className='bottom-0 absolute'>
                <NavBar />
            </SafeAreaView>
        </SafeAreaView>
    );
}