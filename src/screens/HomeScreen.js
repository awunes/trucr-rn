import React from "react";
import { ScrollView, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView 
      style={styles.container}
    >
      <ImageBackground 
      source={{uri: 'https://st2.depositphotos.com/6838070/42761/i/600/depositphotos_427611124-stock-photo-car-driving-winter-road-blizzard.jpg' }}
      style={styles.image}
      >
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('AL_GA')}
        >
          <Text>AL-GA</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('ID_MA')}
        >
          <Text>ID-MA</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('MI_NM')}
        >
          <Text>MI-NM</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('NY_SD')}
        >
          <Text>NY-SD</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('TN_WY')}
        >
          <Text>TN-WY</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Canada')}
        >
          <Text>Canada</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Mexico')}
        >
          <Text>Mexico</Text>
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'teal',
    borderRadius: 30,
    marginLeft: 150,
    marginRight: 150,
    marginTop: 40,
    padding: 10,
  },
  container: {
    flex: 1,
  },
  image: {
    width: '100%', 
    height: '100%',
    marginBottom: '60%'
  }
});

export default HomeScreen;
