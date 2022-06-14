import { StyleSheet, Text, Pressable } from 'react-native';
import React from 'react';


const AuthPressable = props => {
    const { onPressHandler, title } = props;

    return (
        <Pressable
            style={styles.button}
            onPress={onPressHandler}
            android_ripple={{ color: '#FFF' }}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default AuthPressable;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FF1493',
        marginVertical: 5,
        paddingVertical: 10,
        width: '80%',
        height: 40,
        alignItems: 'center',
        borderRadius: 25,
        marginTop: 20
    },
    text: {
        color: 'white'
    }
});
