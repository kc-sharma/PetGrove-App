import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; 

const JobsScreen = () => (
    <View style={styles.screenCenter}>
      <Text>Jobs Screen</Text>
    </View>
  );
  
  const ProfileScreen = () => (
    <View style={styles.screenCenter}>
      <Text>Profile Screen</Text>
    </View>
  );
  
  const SearchScreen = () => (
    <View style={styles.screenCenter}>
      <Text>Search Screen</Text>
    </View>
  );
  
  const CreateScreen = () => (
    <View style={styles.screenCenter}>
      <Text>Create Screen</Text>
    </View>
  );
  
  // Create a Tab Navigator
  const Tab = createBottomTabNavigator();
  
  const HomeTabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Jobs') {
              iconName = 'briefcase-outline';
            } else if (route.name === 'Profile') {
              iconName = 'person-outline';
            } else if (route.name === 'Search') {
              iconName = 'search-outline';
            } else if (route.name === 'Create') {
              iconName = 'add-circle-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#00796b',  // Active color
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Jobs" component={JobsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Create" component={CreateScreen} />
      </Tab.Navigator>
    );
  };
  
  export default HomeTabNavigator;

const styles = StyleSheet.create({
    screenCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
})