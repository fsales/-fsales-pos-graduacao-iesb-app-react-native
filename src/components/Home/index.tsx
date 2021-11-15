import React from 'react';
import { Text, View } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import SignIn from '../../screens/SignIn';

const Home = function () : Element {
  const { colors } = useTheme();
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
    }}
    >

      <SignIn />
      <Text style={{ color: colors.onSurface }}>
        Teste
      </Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log('press')}
      >
        Entrar
      </Button>
    </View>
  );
};
export default Home;
