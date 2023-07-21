import React from "react";
import { ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";

const United_States = ({ navigation }) => {
  return (

    <ScrollView 
    style={styles.container}
    >
    <TouchableOpacity 
    style={styles.button}
    onPress={() => navigation.navigate('AL_GA')}
  >
    <Text style={styles.buttonText}>AL-GA</Text>
  </TouchableOpacity>
  <TouchableOpacity 
    style={styles.button}
    onPress={() => navigation.navigate('ID_MA')}
  >
    <Text style={styles.buttonText}>ID-MA</Text>
  </TouchableOpacity>
  <TouchableOpacity 
    style={styles.button}
    onPress={() => navigation.navigate('MI_NM')}
  >
    <Text style={styles.buttonText}>MI-NM</Text>
  </TouchableOpacity>
  <TouchableOpacity 
    style={styles.button}
    onPress={() => navigation.navigate('NY_SD')}
  >
    <Text style={styles.buttonText}>NY-SD</Text>
  </TouchableOpacity>
  <TouchableOpacity 
    style={styles.button}
    onPress={() => navigation.navigate('TN_WY')}
  >
    <Text style={styles.buttonText}>TN-WY</Text>
  </TouchableOpacity>
  </ScrollView>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'lightblue',
    borderRadius: 30,
    marginLeft: 160,
    marginRight: 150,
    marginTop: 75,
    padding: 10,
  },
  buttonText: {
    fontSize: 14,
    marginLeft: 6,
  },
  container: {
    backgroundColor: 'teal',
    flex: 1,
  }
});

export default United_States;