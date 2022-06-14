import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, Pressable,KeyboardAvoidingView, Platform, Keyboard,ToastAndroid, Alert } from 'react-native';
import React, {useState} from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,} from 'firebase/auth';
import { AuthTextInput, AuthPressable } from '../../components';
import { auth } from '../../firebase';



const MainScreen = ({navigation}) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const missingFieldsToast = () => {
    Alert.alert(
        'Missing fields, please try again!'
    );
  };

  const signUpToast = () => {
    Alert.alert(
        'Sign Up successfully completed!',
    );
};

const signupAlert = () => {
  Alert.alert(
      'This email is already in use!'
  );
};



  const loginHandler = () => {
    if (email.length === 0 || password.length === 0) {
        missingFieldsToast();
        return;
    }

    return signInWithEmailAndPassword(auth, email, password)
          .then(userCredentials => {
              const user = userCredentials.user;

              // To show the user object returned
              console.log(user);

              restoreForm();
          })
          .catch(error => {
              const errorCode = error.code;
              const errorMessage = error.message;

              console.error('[loginHandler]', errorCode, errorMessage);
          });
  };

  const signUpHandler = () => {
    if (email.length === 0 || password.length === 0) {
        missingFieldsToast();
        return;
    }

    return createUserWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;

            // To show the user object returned
            console.log(user);

            restoreForm();
            signUpToast();
        })
        .catch(error => {
          signupAlert();
            const errorCode = error.code;
            const errorMessage = error.message;
            
            console.error('[signUpHandler]', errorCode, errorMessage);
        });
};

const restoreForm = () => {
    setEmail('');
    setPassword('');
    Keyboard.dismiss();
};

  return (
    <KeyboardAvoidingView
      style = {{ flex: 1}}
      behavior = {Platform.OS == 'ios' ? 'padding' : null}
      >

    <View style = {styles.container}>
    <Text style = {[styles.welcomeText, styles.boldText]}>
       Welcome to HangOUTs! 
       </Text>
    <Text style = {styles.boldText}>
      {isLogin? 'Login Page' : 'SignUp page'}
    </Text>
      <StatusBar style="auto" />
      <View style ={styles.inputView}>
        <AuthTextInput
          value ={email}
          placeholder="NUS Email."
          textHandler={setEmail}
          placeholderTextColor="#000000"
          keyboardType = 'email-address'
        />
      </View>

      <View style = {styles.inputView}>
        <AuthTextInput
          value = {password}
          placeholder="Password."
          placeholderTextColor="#000000"
          textHandler = {setPassword}
          secureTextEntry

        />
      </View>

      <AuthPressable
        onPressHandler={isLogin ? loginHandler : signUpHandler}
        onPress = {() => navigation.navigate('Home')}
        title={'Proceed'}
        style = {styles.loginBtn}
        />

      <AuthPressable
        onPressHandler={() => setIsLogin(!isLogin)}
        title={`Switch to ${isLogin ? 'Sign Up' : 'Login'}`}
        style = {styles.loginBtn}
      />
    </View>
     </KeyboardAvoidingView>
    );
}
  
  export default MainScreen;

  

  
  const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#92DFF3',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
    
        alignItems: "center",
      },
    
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
    
      loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FF1493",
      },
    
      header: {
        width: "100%",
        height: "100%",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
      },
    
      headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: "#333",
        letterSpacing: 1,
      },

      boldText: {
        fontWeight: '400'
    },
    welcomeText: {
        fontSize: 32,
        textAlign: 'center',
        marginBottom: 20
    }
    });
  
  
    