import { createDrawerNavigator } from "@react-navigation/drawer";
import React from 'react';
import Home from "../components/Home";
import Movies from "../components/Movies";

const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Filmes" component={Movies} />
    </Drawer.Navigator>
  );
};

export default Routes;
