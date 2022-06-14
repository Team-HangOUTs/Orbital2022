import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    TextInput,
    KeyboardAvoidingView,
    Pressable,
    Dimensions,
    FlatList,
    ToastAndroid,
    Keyboard,
  } from 'react-native';
  import React, { useState, useEffect } from 'react';


  const OrganiserScreen = () => {
    return (
      <View style={styles.container}>e
        <Text style = {[styles.welcomeText, styles.boldText]}>
         Activities 
         </Text>

        <StatusBar style="auto" />

        <Pressable
          style ={styles.loginBtn}
        >
          <Text style={styles.text}>Sports</Text>
        </Pressable>

        <Pressable
          style={styles.loginBtn}
        >
          <Text style={styles.text}>Games</Text>
        </Pressable>
      </View>
    );
  }
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
      fontSize: 10,
      color: "#333",
      letterSpacing: 1,
    },

    boldText: {
      fontWeight: '500'
    },

    welcomeText: {
      fontSize: 32,
      textAlign: 'center',
      marginBottom: 20
    },

    buttonStyleContainer: {
      flex: 1,
      flexDirection: 'row',
      marginHorizontal: 20,
       marginTop: 5,
     }
    });