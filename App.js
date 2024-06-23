//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import store from './sotre/store.js';
import { Provider as ReduxProvider } from 'react-redux';
import { StyleSheet, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './components/material.js';
import HomeScreen from './components/homeScreen.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" style={styles.container}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>  
         
      </NavigationContainer>
    </ReduxProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  }
  
});

