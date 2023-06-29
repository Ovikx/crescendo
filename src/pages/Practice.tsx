import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { View } from 'react-native';
import { TopBar } from '../components/TopBar';

type Props = NativeStackScreenProps<RootStackParamList, 'Practice'>;

export const Practice = ({navigation, route}: Props) => {
    return (
        <View className='bg-slate-900 flex-1'>
            <TopBar label={route.params.itemName} />
        </View>
    )
}