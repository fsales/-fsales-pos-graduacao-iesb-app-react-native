import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Appearance } from 'react-native';
import 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import { dark, theme } from './src/global/theme';
import Routes from './src/routes';



const colorScheme = Appearance.getColorScheme();
const App = function () {
  return (
    <PaperProvider theme={colorScheme === 'light' ? theme : dark}>

      <NavigationContainer>
        <Routes />
      </NavigationContainer>

    </PaperProvider>
  );
};

export default App;
