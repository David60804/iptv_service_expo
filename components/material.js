import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../sotre/slices/authSlice';
import { useNavigation } from '@react-navigation/native';



const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [provider, setProvider] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const authStatus = useSelector((state) => state.auth.status);
  const user = useSelector((state) => state.auth.user);






  const handleLogin = () => {
    dispatch(loginUser({ provider,username, password, }));
  };

  useEffect(() => {
    console.log(user)
    if (authStatus === 'succeeded' && user !== '') {
      navigation.navigate('Home'); // Replace 'Home' with your target route name
    }
  }, [authStatus, navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/loginbg.png')} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <Text style={styles.overlayText} variant="titleLarge">Login</Text>
          <TextInput
            style={styles.input}
            label="Please input provider"
            value={provider}
            onChangeText={setProvider}
            keyboardType="Text"
            autoCapitalize="none"
            mode="outlined"
          />
          <TextInput
            style={styles.input}
            label="Please input username"
            value={username}
            onChangeText={setUsername}
            keyboardType="Text"
            autoCapitalize="none"
            mode="outlined"
          />
          <TextInput
            style={styles.input}
            label="Please input password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
            mode="outlined"
          />
          <Button
            mode="contained"
            onPress={handleLogin}
       
          >
            Login
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    width: '80%', // Adjust width as needed
    alignItems: 'center',
  },
  overlayText: {
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    width: '100%',
  },
  button: {
    width: '100%',
    marginTop: 10,
  },
});

export default LoginScreen;