import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './src/navigation/stack';

// Pages
import { PracticeItems } from './src/pages/PracticeItems';
import { Home } from './src/pages/Home';
import { PracticeLists } from './src/pages/PracticeLists';
import { DB } from './src/db/db';

export default function App() {
  //DB.itemsTable.migrateTable();
  // DB.database.transaction(
  //   tx => {
  //     tx.executeSql(`PRAGMA user_version=0`, undefined, (tx, res) => console.log('Set user version to 0'));
  //   }
  // )
  // DB.database.transaction(
  //   tx => {
  //     tx.executeSql(
  //       'PRAGMA user_version',
  //       undefined,
  //       (tx, resultSet) => {
  //         console.log(`user_version = ${resultSet.rows._array[0]['user_version']}`)
  //       }
  //     )
  //   }
  // )
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
