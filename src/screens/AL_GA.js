import React from "react";
import {
  ScrollView, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Linking } from "react-native";

const A_G = () => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://www.dot.state.al.us/maps.html'
        )
        }
      >
        <Text style={styles.title}>Alabama</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://511.alaska.gov/'
        )
        }
      >
        <Text style={styles.title}>Alaska</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://www.az511.com'
        )
        }
      >
        <Text style={styles.title}>Arizona</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://www.idrivearkansas.com'
        )
        }
      >
        <Text style={styles.title}>Arkansas</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://roads.dot.ca.gov/'
        )
        }
      >
        <Text style={styles.title}>California</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://maps.cotrip.org/@-106.34053,39.2679,8?show=winterDriving,roadReports,plowLocations,weatherRadar,weatherWarnings,chainLaws'
        )
        }
      >
        <Text style={styles.title}>Colorado</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://ctroads.org/'
        )
        }
      >
        <Text style={styles.title}>Connecticut</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://www.deldot.gov/map/'
        )
        }
      >
        <Text style={styles.title}>Delaware</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://fl511.com/'
        )
        }
      >
        <Text style={styles.title}>Florida</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://511ga.org'
        )
        }
      >
        <Text style={styles.title}>Georgia</Text>
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
    marginRight: 110,
    marginTop: 15,
    padding: 10,
  },
  container: {
    backgroundColor: 'teal',
    flex: 1,
  }
});

export default A_G;