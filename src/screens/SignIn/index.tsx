import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

import { style } from './styles';

export default function SignIn() {
    const [text, setText] = useState('f');
    return (
        <View style={style.container}>
            <Text>Hello Word,</Text>

            <TextInput
                style={style.input}
                onChangeText={setText} />

            <Text>
                você digitou {text}
            </Text>
        </View>
    );
}