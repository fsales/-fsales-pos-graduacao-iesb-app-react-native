import { DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFF',
    primary: '#E51C44',
    accent: '#FFD900',
    danger: '#Ed1c24',
    line: '#991F36',
    heading: '#DDE3F0',
  },
};

export const dark = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    background: '#131313',
    primary: '#FFF',
    accent: '#FFD900',
    danger: '#Ed1c24',
    line: '#991F36',
    heading: '#DDE3F0',
  },
};
