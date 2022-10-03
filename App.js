import React from 'react';
import {Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Styles from './src/utility/styles';

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
          options={({navigation}) => ({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
            headerLeft: () => (
              <Pressable
                onPress={() => navigation.navigate('TicketList')}
               
                >
                <MaterialCommunityIcons
                  name="chevron-left"
                  size={40}
                  color={Styles.colors.gray}
                />
              </Pressable>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
