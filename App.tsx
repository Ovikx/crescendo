import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PracticeList } from './src/pages/PracticeList';
import { Home } from './src/pages/Home';
import { Stack } from './src/navigation/stack';


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
        <Stack.Screen name='PracticeList' component={PracticeList} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
} 
