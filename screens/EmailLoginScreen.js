import { 
  KeyboardAvoidingView, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View 
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';  // Assuming firebase.js has the initialized Firebase app
import { useNavigation } from '@react-navigation/native';

const EmailLoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  useEffect(()=> {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user){
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    const auth = getAuth();  // Initialize Firebase Auth
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log("User registered with email", user.email);
      })
      .catch(error => alert(error.message));
  };

  const handleSignIn = () => {
    const auth = getAuth();  // Initialize Firebase Auth
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log("Logged in with", user.email);
      })
      .catch(error => alert(error.message));
  };

  const handleNavigateToLogin = () => {
    navigation.replace('Login'); // Navigate to LoginScreen
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding">
      <View style={styles.headerContainer}>
        <Text style={styles.welcomeText}>Welcome to Pet Grove!</Text>
        <Text style={styles.subText}>Please login/register with your email to continue</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignIn} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSignUp} style={[styles.button, styles.buttonOutline]}>
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>

        {/* Button to navigate to the LoginScreen */}
        <TouchableOpacity onPress={handleNavigateToLogin} style={styles.navButton}>
          <Text style={styles.navButtonText}>Go to Login Screen</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default EmailLoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#f0f4f7',  // Light background color for better aesthetics
  },
  headerContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0782F9',  // Make the text match the button color
  },
  subText: {
    fontSize: 16,
    color: '#8f8f8f',
    marginTop: 5,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    borderColor: '#0782F9',
    borderWidth: 1,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
  navButton: {
    backgroundColor: '#FF5733',  // Different color for the navigation button
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  navButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});
