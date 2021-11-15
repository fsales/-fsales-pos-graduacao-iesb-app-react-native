/* eslint-disable func-names */
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Appearance } from 'react-native';
import Home from './src/components/Home';
import { dark, theme } from './src/global/theme';

const colorScheme = Appearance.getColorScheme();
const App = function (): Element {
  return (
    <PaperProvider theme={colorScheme === 'light' ? theme : dark}>
      <Home />
    </PaperProvider>
  );
};

export default App;
