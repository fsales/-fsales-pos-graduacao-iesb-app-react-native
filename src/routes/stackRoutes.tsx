import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../components/Home';


const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,

        }} />
    </Stack.Navigator>
  )
}

export default StackRoutes;
