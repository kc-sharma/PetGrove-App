import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EmailLoginScreen from './screens/EmailLoginScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import CreatePetProfile from './screens/CreatePetProfile';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown:false }} name='Login' component={LoginScreen} />  
      <Stack.Screen options={{ headerShown:false }} name='EmailLogin' component={EmailLoginScreen} />
      <Stack.Screen options={{ headerShown:false }} name='CreatePetProfile' component={CreatePetProfile} />
      <Stack.Screen  name='Home' component={HomeScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
