import React from "react";
import Home from "./src/components/Home";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { dark, theme } from "./src/global/theme";
import { Appearance } from "react-native";

const colorScheme = Appearance.getColorScheme();
export default function App() {
  console.log(colorScheme)
  return (
    <>
      <PaperProvider theme={colorScheme == 'light' ? theme : dark}>
        <Home />
      </PaperProvider>
    </>
  );
}