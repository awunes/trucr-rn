import React from "react";
import {
  ScrollView, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Linking } from "react-native";

const NY_SD = () => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://www.511ny.org'
        )}
      >
        <Text style={styles.title}>New York</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://drivenc.gov'
        )}
      >
        <Text style={styles.title}>North Carolina</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://www.dot.nd.gov/travel'
        )}
      >
        <Text style={styles.title}>North Dakota</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://www.ohgo.com'
        )}
      >
        <Text style={styles.title}>Ohio</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://okroads.org'
        )}
      >
        <Text style={styles.title}>Oklahoma</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://www.tripcheck.com'
        )}
      >
        <Text style={styles.title}>Oregon</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://www.511pa.com'
        )}
      >
        <Text style={styles.title}>Pennsylvania</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://www.dot.ri.gov/travel'
        )}
      >
        <Text style={styles.title}>Rhode Island</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://www.511sc.org'
        )}
      >
        <Text style={styles.title}>South Carolina</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://www.sd511.org'
        )}
      >
        <Text style={styles.title}>South Dakota</Text>
      </TouchableOpacity>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginLeft: 15,
  },
  button: {
    backgroundColor: 'lightblue',
    borderRadius: 30,
    marginLeft: 100,
    marginRight: 80,
    marginTop: 15,
    padding: 10,
  },
  container: {
    backgroundColor: 'teal',
    flex: 1,
  }
});

export default NY_SD;