import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Movies from '../pages/Movies';
import StackRoutes from './stackRoutes';


const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitle: 'Sales Flix',
        drawerStyle: {
          backgroundColor: '#7d8db8',
          paddingTop: 20,
        },
        drawerActiveBackgroundColor: '#cc6270',
        drawerActiveTintColor: '#FFF',
        drawerInactiveTintColor: '#FFF'

      }}>
      <Drawer.Screen
        name="HomeDrawer"
        component={StackRoutes}
        options={{
          title: 'Home',
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? "movie-open" : "movie-outline"}
              size={size}
              color={color} />
          )
        }} />
      <Drawer.Screen
        name="Filmes"
        component={Movies}
        options={{
          title: 'Meus Filmes',
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? "archive" : "archive-outline"}
              size={size}
              color={color} />
          )
        }}
      />
    </Drawer.Navigator>
  );
};

export default Routes;
