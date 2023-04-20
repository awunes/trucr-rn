import React from "react";
import {
  ScrollView, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Linking } from "react-native";

const TN_WY = () => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://smartway.tn.gov/traffic?features=incident,traffic'
        )}
      >
        <Text style={styles.title}>Tennessee</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://drivetexas.org'
        )}
      >
        <Text style={styles.title}>Texas</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://udottraffic.utah.gov'
        )}
      >
        <Text style={styles.title}>Utah</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://newengland511.org'
        )}
      >
        <Text style={styles.title}>Vermont</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://www.511virginia.org'
        )}
      >
        <Text style={styles.title}>Virginia</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://wsdot.com/travel/real-time/'
        )}
      >
        <Text style={styles.title}>Washington</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://www.wv511.org'
        )}
      >
        <Text style={styles.title}>West Virginia</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://511wi.gov'
        )}
      >
        <Text style={styles.title}>Wisconsin</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://www.wyoroad.info/pls/Browse/WRR.RoutesQuery'
        )}
      >
        <Text style={styles.title}>Wyoming</Text>
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
    marginRight: 100,
    marginTop: 20,
    padding: 10,
  },
  container: {
    backgroundColor: 'teal',
    flex: 1,
  }
});

export default TN_WY;