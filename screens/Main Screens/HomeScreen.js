import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, Pressable } from 'react-native';
import React, {useState} from 'react';

const HomeScreen = ({navigation}) => {
   return ( 
    <View style= {styles.container}>
   <Pressable
    style={styles.loginBtn}
>
    <Text style={styles.text}>Participants</Text>
</Pressable>

<Pressable
    style={styles.loginBtn}
>
    <Text style={styles.text}>Organisers</Text>
</Pressable>
</View>
   );
};
export default HomeScreen;



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
  });


  