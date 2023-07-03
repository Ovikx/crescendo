import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './src/navigation/stack';

// Pages
import { PracticeItems } from './src/pages/PracticeItems';
import { Home } from './src/pages/Home';
import { PracticeLists } from './src/pages/PracticeLists';
import { DB } from './src/db/db';
import { SideNavBarContainer } from './src/components/SideNavBarContainer';
import { Practice } from './src/pages/Practice';
import { Sessions } from './src/pages/Sessions';

export default function App() {
  return (
    
      <NavigationContainer>
        <SideNavBarContainer>
          <Stack.Navigator screenOptions={{animation: 'none'}}>
            <Stack.Screen name='Home' component={Home} options={{headerShown: false, }} />
            <Stack.Screen name='PracticeItems' component={PracticeItems} options={{headerShown: false}}/>
            <Stack.Screen name='PracticeLists' component={PracticeLists} options={{headerShown: false}}/>
            <Stack.Screen name='Practice' component={Practice} options={{headerShown: false}} />
            <Stack.Screen name='Sessions' component={Sessions} options={{headerShown: false}} />
          </Stack.Navigator>
        </SideNavBarContainer>
      </NavigationContainer>
    
  );
} 
