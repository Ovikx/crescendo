import { SafeAreaView, View } from "react-native"
import { OverviewStats } from '../components/OverviewStats';
import { RecentList } from '../components/RecentList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavBar } from '../components/NavBar';
import { RootStackParamList } from '../navigation/types';
import { TopBar } from '../components/TopBar';
import { FloatingAddButton } from '../components/FloatingAddButton';
import { useState } from 'react';
import { NewItemModal } from '../components/NewItemModal';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home = ({navigation}: Props) => {
    const [modalVisible, setModalVisible] = useState(false);
    
    return (
        <View className="bg-slate-900 flex-1">
            <TopBar label='Home'/>
            <SafeAreaView className='flex-1'>
                <SafeAreaView className=''>
                    <OverviewStats textStyle='mt-10'/>
                    <RecentList textStyle='mt-6' navigation={navigation}/>
                </SafeAreaView>
                
            </SafeAreaView>
            <View className='bottom-0 absolute'>
                <NavBar navigation={navigation}/>
            </View>
            <SafeAreaView className='bottom-20 right-5 h-20 w-20 absolute'>
                <FloatingAddButton onPress={setModalVisible} visible={true}/>
            </SafeAreaView>
            <NewItemModal visible={modalVisible}  setVisible={setModalVisible}/>
        </View>
    );
}