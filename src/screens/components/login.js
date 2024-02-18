// import React, { useState } from "react";
// import {Text, TextInput, View, StyleSheet, TouchableOpacity} from "react-native";

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   return (
//     <View style={{padding: 10}}>
//       <TextInput
//         style={styles.textinput}
//         value={username}
//         placeholder={"Email"}
//         onChangeText={text => setUsername(text)}
//         autoCapitalize={'none'}
//         keyboardType={'email-address'}
//       />
//       <TextInput
//         style={styles.textinput}
//         value={password}
//         placeholder={"Password"}
//         secureTextEntry
//         onChangeText={text => setPassword(text)}
//       />
//       <TouchableOpacity onPress={() =>{}}>
//         <View style={{height: 40}}>
//           <Text style={styles.button_label}>{`Sign in`}</Text>
//         </View>
//       </TouchableOpacity>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   button_label: {
//     backgroundColor: 'teal',
//     borderRadius:30,
//     padding: 10,
//   },

//   textinput: {
//     height: 40,
//   }
// })

// export default Login;

import {useAuth0, Auth0Provider} from 'react-native-auth0';
import HomeScreen from "./HomeScreen"

const App = () => {
  return (
    <Auth0Provider domain={"dev-72cceszs.us.auth0.com"} clientId={"LM0bewbslw8NG0dxZ1UytDSvYalMMO7I"}>
      <HomeScreen/>
    </Auth0Provider>
  );
};