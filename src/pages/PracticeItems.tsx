import { Dimensions, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native"
import { OverviewStats } from '../components/OverviewStats';
import { RecentList } from '../components/RecentList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavBar } from '../components/NavBar';
import { RootStackParamList } from '../navigation/types';
import { TopBar } from '../components/TopBar';
import { Icon } from '../../assets/Images';
import { PracticeItemLight } from '../components/PracticeItemLight';
import { FloatingAddButton } from '../components/FloatingAddButton';

type Props = NativeStackScreenProps<RootStackParamList, 'PracticeItems'>;

export const PracticeItems = ({route, navigation}: Props) => {
    return (
        <View className="bg-slate-900 flex-1">
            <TopBar label='Practice Items'>
                <SafeAreaView className='mx-auto'>
                    <SafeAreaView className='rounded-full bg-slate-700 flex-row h-10 p-2 w-11/12 my-4 items-center'>
                        <SafeAreaView className='ml-4'>
                            <Icon name='search' size={30} color='#aaaaaa'/>
                        </SafeAreaView>
                        <TextInput
                            className='h-8 flex-1 ml-4 grow'
                            placeholder='Search for practice items'
                            placeholderTextColor='#aaaaaa'
                        />
                    </SafeAreaView>
                </SafeAreaView>
            </TopBar>
            <SafeAreaView className='flex-col items-center mt-3 flex-1'>
                <ScrollView className='w-11/12'>
                    <PracticeItemLight itemName='Sicilienne' itemType='item'/>
                    <PracticeItemLight itemName='Rachmaninoff Prelude in C-Sharp Minor' itemType='item'/>
                    <PracticeItemLight itemName='Je Te Laisserai Des Mots' itemType='item'/>
                    <PracticeItemLight itemName='Hornet' itemType='item'/>
                </ScrollView>
            </SafeAreaView>
            {/* <SafeAreaView className='bottom-20 right-5 h-24 w-24 absolute'>
                <FloatingAddButton />
            </SafeAreaView> */}
            <View className='bottom-0 absolute'>
                <NavBar navigation={navigation}/>
            </View>
        </View>
    );
}