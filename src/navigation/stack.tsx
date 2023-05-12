import { createNativeStackNavigator } from '@react-navigation/native-stack';

type RootStackParamList = {
    Home: undefined;
    PracticeList: undefined;
  }
  
export const Stack = createNativeStackNavigator<RootStackParamList>();