import { StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const THEME = '#3F3F3F';

const AuthTextInput = props => {
    const { secureTextEntry, keyboardType, placeholder, value, textHandler } =
        props;

    return (
        <TextInput
            style={styles.textInput}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            placeholderTextColor = "#464646"
            keyboardType={keyboardType}
            value={value}
            onChangeText={textHandler}
            selectionColor={THEME}
            
        />
    );
};

export default AuthTextInput;

const styles = StyleSheet.create({
    textInput: {
        alignSelf: 'center',
        width: '80%',
        height: 40,
        paddingHorizontal: 1,
        marginBottom: 10,
        
        
    }
    
});
