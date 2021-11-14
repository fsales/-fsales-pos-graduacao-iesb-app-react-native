import React from "react";
import {
    Text,
    TouchableOpacity,
    TouchableOpacityProps
} from "react-native";

import { styles } from "./styles";


interface Props extends TouchableOpacityProps {
    title: string,
}

/*type Props = TouchableOpacityProps & {
    title: string,
}*/



export default function ButtonIcon({ title, ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.container} {...rest} >
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>

    );
}