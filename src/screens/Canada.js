import React from "react";
import { 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView,
  Linking } from "react-native";

const Canada = () => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://511.alberta.ca'
        )
        }
      >
        <Text style={styles.title}>Alberta</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://www.drivebc.ca'
        )
        }
      >
        <Text style={styles.title}>British Columbia</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://www.manitoba511.ca/en'
        )
        }
      >
        <Text style={styles.title}>Manitoba</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://www.gnb.ca/roads'
        )
        }
      >
        <Text style={styles.title}>New Brunswick</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://www.511nl.ca/en'
        )
        }
      >
        <Text style={styles.title}>Newfoundland and Labrador</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://www.dot.gov.nt.ca/highways/highway-conditions'
        )
        }
      >
        <Text style={styles.title}>Northwest Territories</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://511.novascotia.ca'
        )
        }
      >
        <Text style={styles.title}>Nova Scotia</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://511on.ca'
        )
        }
      >
        <Text style={styles.title}>Ontario</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://511.gov.pe.ca/en'
        )
        }
      >
        <Text style={styles.title}>Prince Edward Island</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://www.quebec511.info/en'
        )
        }
      >
        <Text style={styles.title}>Quebec</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://www.saskatchewan.ca/residents/transportation/highways/highway-hotline'
        )
        }
      >
        <Text style={styles.title}>Saskatchewan</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://511yukon.ca'
        )
        }
      >
        <Text style={styles.title}>Yukon</Text>
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
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10,
    padding: 10,
  },
  container: {
    backgroundColor: 'teal',
    flex: 1,
  }
});

export default Canada;