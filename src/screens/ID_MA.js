import React from "react";
import {
  ScrollView, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Linking } from "react-native";

const I_MA = () => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://511.idaho.gov'
        )}
      >
        <Text style={styles.title}>Idaho</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://www.gettingaroundillinois.com/WinterConditions/index.html'
        )}
      >
        <Text style={styles.title}>Illinois</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://511in.org'
        )}
      >
        <Text style={styles.title}>Indiana</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://www.511ia.org'
        )}
      >
        <Text style={styles.title}>Iowa</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://www.kandrive.org'
        )}
      >
        <Text style={styles.title}>Kansas</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://goky.ky.gov/'
        )}
      >
        <Text style={styles.title}>Kentucky</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://www.511la.org'
        )}
      >
        <Text style={styles.title}>Louisiana</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://newengland511.org'
        )}
      >
        <Text style={styles.title}>Maine</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://chart.maryland.gov/InteractiveMap/GetInteractiveMap'
        )}
      >
        <Text style={styles.title}>Maryland</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://www.mass511.com'
        )}
      >
        <Text style={styles.title}>Massachusetts</Text>
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
    // alignItems: 'center',
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

export default I_MA;