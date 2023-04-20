import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Linking } from "react-native";

const Mexico = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://www.gob.mx'
        )
        }
      >
        <Text style={styles.title}>Mexico (All States)</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginLeft: 10,
  },
  button: {
    backgroundColor: 'lightblue',
    borderRadius: 30,
    marginLeft: 70,
    marginRight: 70,
    marginTop: 100,
    padding: 10,
  },
  container: {
    backgroundColor: 'teal',
    flex: 1,
  }
});

export default Mexico;