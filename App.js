import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './screens/Welcome';
import Home from './screens/Home';
import Booking from './screens/Booking';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
      <Stack.Screen 
        name="Welcome"
        component={Welcome} 
      />
      <Stack.Screen 
        name="Home"
        component={Home} 
      />
      <Stack.Screen 
       name="Booking"
       component={Booking} 
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}