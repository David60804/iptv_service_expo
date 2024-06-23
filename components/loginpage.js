import React, {useState} from 'react';
import { StyleSheet, ImageBackground, View, Text, TextInput, Button, Alert } from "react-native";

export default function LoginCom (){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    Alert.alert('Login clicked', `Email: ${email}\nPassword: ${password}`);
  };
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../assets/loginbg.png')} style={styles.backgroundImage}/>
    
                <Text style={styles.overlayText}>Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    autoCapitalize="none"
                />
                <Button style={{width:300}} title="Login" onPress={handleLogin} />
       

        </View>
    )
}


const styles = StyleSheet.create({
    loginPanel:{
        position:'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        
      },
      title: {
        fontSize: 24,
        marginBottom: 16,
      },
    backgroundImage: {
      opacity:0.7,
      flex: 1,
      backgroundSize:'cover',
      resizeMode:'center',
      justifyContent: 'center',
      alignItems: 'center',
      width:500,
      height:700
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
      color:'white'
    },
    overlayText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
    },
    input: {
        width: 300,
        padding: 10,
        marginVertical: 8,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 4,
      },
     
  });
  