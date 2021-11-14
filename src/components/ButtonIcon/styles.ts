import { theme } from './../../global/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        backgroundColor: theme.color.primary,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        flex: 1,
        color: theme.color.heading,
        fontSize: 15,
        textAlign: 'center',
    }
});