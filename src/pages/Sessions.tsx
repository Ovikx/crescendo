import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { View } from 'react-native';
import { TopBar } from '../components/TopBar';

type Props = NativeStackScreenProps<RootStackParamList, 'Sessions'>;

export const Sessions = ({navigation}: Props) => {
    return (
        <View className='bg-slate-900 flex-1'>
            <TopBar label='Previous Sessions'/>
        </View>
    )
}