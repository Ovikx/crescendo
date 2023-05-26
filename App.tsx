import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PracticeItems } from './src/pages/PracticeItems';
import { Home } from './src/pages/Home';
import { Stack } from './src/navigation/stack';
import { PracticeLists } from './src/pages/PracticeLists';


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{animation: 'fade', animationDuration: 150}}>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
        <Stack.Screen name='PracticeItems' component={PracticeItems} options={{headerShown: false}}/>
        <Stack.Screen name='PracticeLists' component={PracticeLists} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
} 
