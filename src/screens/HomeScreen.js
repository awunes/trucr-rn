import React from "react";
import { ScrollView, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { AntDesign } from '@expo/vector-icons';
// import Disclaimer from "./Disclaimer";
// import Login from "./login";
// import Logout from "./logout";

const HomeScreen = ({ navigation }) => {
  return (
    <>
    {/* <Login/> */}
    {/* <Logout/> */}
    {/* <Disclaimer/> */}
    <ScrollView style={styles.container}>
      <ImageBackground 
      source={{uri: 'https://st2.depositphotos.com/6838070/42761/i/600/depositphotos_427611124-stock-photo-car-driving-winter-road-blizzard.jpg' }}
      style={styles.image}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('United_States')}
        >
          <Text style={styles.buttonText}>United States</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Canada')}
        >
          <Text style={styles.buttonText}>Canada</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Mexico')}
        >
          <Text style={styles.buttonText}>Mexico</Text>
        </TouchableOpacity>
        <Text style={styles.ownerText}>Built by Tony Swearingen</Text>
        <Text style={styles.ownerText}>Owned by Swearingen Unlimited LLC</Text>
        <Text style={styles.ownerText}><AntDesign name="copyright" size={12} color="red" /> - 2023</Text>
      </ImageBackground>
    </ScrollView>
    </>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: 'teal',
    borderRadius: 30,
    marginLeft: 140,
    marginRight: 150,
    marginTop: 40,
    padding: 10,
  },
  buttonText: {
    fontSize: 18,
    marginLeft: 8,
  },
  image: {
    width: '100%', 
    height: '100%',
    marginBottom: '90%'
  },
  ownerText: {
    fontSize: 16,
    marginLeft: 80,
    marginTop: 50,
  },
});

export default HomeScreen;
