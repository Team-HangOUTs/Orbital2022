import React from 'react';
import { StyleSheet, Button, TextInput, View, Text, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';

const submitFormHandler = () => {
  if (title.length === 0 || timing.length === 0 || location.length === 0) {
      missingFieldsToast();
      return;
  }
}

const missingFieldsToast = () => {
  Alert.alert(
      'Missing fields, please try again!'
  );
};

export default function ReviewForm({addReview}) {

  return (

    <View 
    style={styles.container}>
      <Text 
      style = {styles.headline}> Games </Text>
      <Formik
        initialValues={{ title: '', timing: '', location: '' }}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {props => (
          <View 
          style = {styles.propstyle}>
            <TextInput
              multiline
              style={styles.input}
              placeholder='Games Title'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
            />

            <TextInput
              style={styles.input}
              placeholder='Timing e.g. 10am - 12pm'
              onChangeText={props.handleChange('timing')}
              value={props.values.timing}
            />

            <TextInput 
              multiline
              style={styles.input}
              placeholder='Location'
              onChangeText={props.handleChange('location')}
              value={props.values.location}
            />
            <TouchableOpacity 
            onPress={props.handleSubmit} 
            style={styles.loginBtn}>
              <Text>Submit</Text>
            </TouchableOpacity>
            
          </View>
           
        )}
      </Formik>
    </View>
    
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent:'center',
    backgroundColor: '#92DFF3',
    
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 20,
    backgroundColor: "#FFC0CB"
  },

  
  loginBtn: {
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },

  headline: {
    textAlign: 'right', // <-- the magic
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 0,
    width: 200,
    
  }
})