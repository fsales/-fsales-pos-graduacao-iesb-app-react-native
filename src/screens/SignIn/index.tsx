import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import ButtonIcon from '../../components/ButtonIcon';

import { style } from './styles';

const SignIn = function () {
  const [text, setText] = useState('');
  return (
    <View style={style.container}>
      <Text>Hello Word,</Text>

      <TextInput
        style={style.input}
        onChangeText={setText}
      />

      <Text>
        você digitou
        {' '}
        {text}
      </Text>

      <ButtonIcon
        title="Entrar login"
        activeOpacity={0.7}
      />
    </View>
  );
};
export default SignIn;
