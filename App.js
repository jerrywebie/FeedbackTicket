import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from './src/screens/Splash';
import TicketList from './src/screens/TicketList';
import NewTicket from './src/screens/NewTicket';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TicketList"
          component={TicketList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewTicket"
          component={NewTicket}
          options={({route}) => ({
            title: route.params.name,
            headerTitleStyle: {
              textTransform: 'uppdercase',
              fontFamily: 'Poppins-Regular',
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
