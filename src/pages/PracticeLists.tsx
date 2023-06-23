import { SafeAreaView, TextInput, View } from "react-native"
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavBar } from '../components/NavBar';
import { RootStackParamList } from '../navigation/types';
import { TopBar } from '../components/TopBar';
import { Icon } from '../../assets/Images';

type Props = NativeStackScreenProps<RootStackParamList, 'PracticeLists'>;

export const PracticeLists = ({navigation}: Props) => {
    return (
        <View className="bg-slate-900 flex-1">
            <TopBar label='Practice Lists'>
                <SafeAreaView className='mx-auto'>
                    <SafeAreaView className='rounded-full bg-slate-700 flex-row h-10 p-2 w-11/12 my-4 items-center'>
                        <SafeAreaView className='ml-4'>
                            <Icon name='search' size={30} color='#aaaaaa'/>
                        </SafeAreaView>
                        <TextInput
                            className='h-8 flex-1 ml-4 grow'
                            placeholder='Search for practice lists'
                            placeholderTextColor='#aaaaaa'
                        />
                    </SafeAreaView>
                </SafeAreaView>
            </TopBar>
            {/* <SafeAreaView className='bottom-20 right-5 h-24 w-24 absolute'>
                <FloatingAddButton />
            </SafeAreaView> */}
            <View className='bottom-0 absolute'>
                <NavBar navigation={navigation}/>
            </View>
        </View>
    );
}