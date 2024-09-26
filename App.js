// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // For icons
import { getAuth } from 'firebase/auth'; // Firebase Auth

import EmailLoginScreen from './screens/EmailLoginScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import Create from './screens/Create';
import JobsScreen from './screens/JobsScreen'; 
import NotificationsScreen from './screens/Notifications'; 
import CommunityScreen from './screens/Community'
import ProfileScreen from './screens/ProfileScreen'
import MessageScreen from './screens/Messages'
import { KeyboardAvoidingView } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  // Get user authentication state
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
      } else setIsAuthenticated(false);
    });
    return unsubscribe;
  }, []);

  if (isAuthenticated === null) {
    // Show a loading screen while checking authentication status
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  // Create Bottom Tab Navigator for Authenticated users
  function AuthenticatedTabs() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Create') {
              iconName = focused ? 'add-circle' : 'add-circle-outline'; 
            } else if (route.name === 'Jobs') {
              iconName = focused ? 'briefcase' : 'briefcase-outline';
            } else if (route.name === 'Notifications') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            } else if (route.name === 'Community') {
              iconName = focused ? 'people-circle-outline' : 'people-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#00796b',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#ffffff',
            paddingBottom: 10,
            paddingTop: 10,
            height: 60,
          },
          headerShown: false, // Hides the header for tab screens
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Community" component={CommunityScreen} />
        <Tab.Screen name="Create" component={Create} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Jobs" component={JobsScreen} />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <>
            <Stack.Screen options={{ headerShown: false }} name="LandingPage" component={AuthenticatedTabs} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Messages" component={MessageScreen} />
          </>
        ) : (
          <>
            <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
            <Stack.Screen options={{ headerShown: false }} name="EmailLogin" component={EmailLoginScreen} />
          </>
        )}
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
