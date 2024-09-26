import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation()

  const handleRedirectLogin = () => {
    navigation.replace('EmailLogin');
  }

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>PET GROVE</Text>
        <Text style={styles.welcome}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Login to your Pet Paradise</Text>
      </View>

      {/* Login Buttons */}
      <TouchableOpacity style={[styles.button, styles.gmailButton]} >
        <Text style={styles.buttonText}>Login with Google</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles.button, styles.facebookButton]} >
        <Text style={styles.buttonText}>Login with Facebook</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles.button, styles.emailButton]} onPress={handleRedirectLogin}>
        <Text style={styles.buttonTextDark}>Login with Email</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.registerLink} onPress={handleRedirectLogin}>
        <Text style={styles.registerText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40, 
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 5, 
    color: '#333',
    textShadowColor: 'rgba(0, 0, 0, 0.2)', 
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  welcome: {
    fontSize: 24,
    color: '#555',
    marginBottom: 15, 
    fontStyle: 'italic',
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 18,
    color: '#777',
    marginBottom: 10,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    width: '85%',
    alignItems: 'center',
  },
  gmailButton: {
    backgroundColor: '#db4437',
  },
  facebookButton: {
    backgroundColor: '#4267B2',
  },
  emailButton: {
    backgroundColor: '#f1c40f',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonTextDark: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
  registerLink: {
    marginTop: 20,
  },
  registerText: {
    color: '#007bff',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default LoginScreen;
