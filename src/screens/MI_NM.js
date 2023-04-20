import React from "react";
import {
  ScrollView, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Linking } from "react-native";

const MI_NM = () => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://mdotjboss.state.mi.us/MiDrive/map'
        )}
      >
        <Text style={styles.title}>Michigan</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://511mn.org'
        )}
      >
        <Text style={styles.title}>Minnesota</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://www.mdottraffic.com/default.aspx?showMain=true'
        )}
      >
        <Text style={styles.title}>Mississippi</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://traveler.modot.org/map'
        )}
      >
        <Text style={styles.title}>Missouri</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://www.511mt.net'
        )}
      >
        <Text style={styles.title}>Montana</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://new.511.nebraska.gov/@-101.38885,41.73038,7?show=roadReports,constructionReports,wazeReports,winterDriving,stationsAlert,weatherWarningsAreaEvents,weatherRadar'
        )}
      >
        <Text style={styles.title}>Nebraska</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://nvroads.com'
        )}
      >
        <Text style={styles.title}>Nevada</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://newengland511.org'
        )}
      >
        <Text style={styles.title}>New Hampshire</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://511nj.org'
        )}
      >
        <Text style={styles.title}>New Jersey</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => 
        Linking.openURL(
          'https://www.nmroads.com'
        )}
      >
        <Text style={styles.title}>New Mexico</Text>
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
    marginLeft: 80,
    marginRight: 80,
    marginTop: 15,
    padding: 10,
  },
  container: {
    backgroundColor: 'teal',
    flex: 1,
  }
});

export default MI_NM;