import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './src/navigation/stack';

// Pages
import { PracticeItems } from './src/pages/PracticeItems';
import { Home } from './src/pages/Home';
import { PracticeLists } from './src/pages/PracticeLists';
import { DB } from './db-core';
import { ItemsTable } from './src/db/tables';

export default function App() {
  // Create tables
  DB.createTable('items', ItemsTable);
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{animation: 'none'}}>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
        <Stack.Screen name='PracticeItems' component={PracticeItems} options={{headerShown: false}}/>
        <Stack.Screen name='PracticeLists' component={PracticeLists} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
} 
