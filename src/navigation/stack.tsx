import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Home: undefined;
    PracticeList: undefined;
  }
  
export const Stack = createNativeStackNavigator<RootStackParamList>();