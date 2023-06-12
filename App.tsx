import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './src/navigation/stack';

// Pages
import { PracticeItems } from './src/pages/PracticeItems';
import { Home } from './src/pages/Home';
import { PracticeLists } from './src/pages/PracticeLists';
import { DB } from './src/db/db';

export default function App() {
  DB.transaction( tx => {
    tx.executeSql(`
      CREATE TABLE IF NOT EXISTS items
      (name TEXT, mastery INTEGER)
    `)
  });
  
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
