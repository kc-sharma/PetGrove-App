import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import Header from '../components/Header'; 

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
    <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ScrollView >
      
      <Text style={styles.title}>Welcome to Pet Grove!</Text>
      <Text style={styles.subtitle}>Discover everything your pet needs in one place.</Text>

      <ScrollView contentContainerStyle={styles.gridContainer}>
        <View style={styles.grid}>
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => navigation.navigate('Create')}
          >
            <Image source={require('../assets/food-icon.png')} style={styles.icon} />
            <Text style={styles.gridText}>Food</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.gridItem}
            // onPress={() => navigation.navigate('SearchNearby')}
          >
            <Image source={require('../assets/walker-icon.png')} style={styles.icon} />
            <Text style={styles.gridText}>Dog Walker</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => navigation.navigate('Create')}
          >
            <Image source={require('../assets/grooming-icon.png')} style={styles.icon} />
            <Text style={styles.gridText}>Grooming</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.gridItem}
            // onPress={() => navigation.navigate('GroupsScreen')}
          >
            <Image source={require('../assets/group-icon.png')} style={styles.icon} />
            <Text style={styles.gridText}>Groups</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.gridItem}
            // onPress={() => navigation.navigate('DoctorScreen')}
          >
            <Image source={require('../assets/doctor-icon.png')} style={styles.icon} />
            <Text style={styles.gridText}>Doctor</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.gridItem}
            // onPress={() => navigation.navigate('MedicineScreen')}
          >
            <Image source={require('../assets/medicine-icon.png')} style={styles.icon} />
            <Text style={styles.gridText}>Medicine</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => navigation.navigate('Create')}
          >
            <Image source={require('../assets/accessories.webp')} style={styles.icon} />
            <Text style={styles.gridText}>Accessories</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => navigation.navigate('Create')}
          >
            <Image source={require('../assets/clothes.webp')} style={styles.icon} />
            <Text style={styles.gridText}>clothes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.gridItem}
          >
            <Image source={require('../assets/toy.png')} style={styles.icon} />
            <Text style={styles.gridText}>Others</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.gridItem}
            // onPress={() => navigation.navigate('MedicineScreen')}
          >
            <Image source={require('../assets/adopt.png')} style={styles.icon} />
            <Text style={styles.gridText}>Adopt</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.gridItem}
          >
            <Image source={require('../assets/gift.png')} style={styles.icon} />
            <Text style={styles.gridText}>Gifts</Text>
          </TouchableOpacity>
          
        </View>
      </ScrollView>
    </ScrollView>
    </View>
    

  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f2f1', // Soft teal background for a calming effect
    padding: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#004d40', // Darker teal for a strong impression
    textAlign: 'center',
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#00796b', // Medium teal for subtitle
    textAlign: 'center',
    marginBottom: 30,
  },
  gridContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 50,
   },
  gridItem: {
    width: '45%',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#ffffff', // White background for a clean look
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
    transform: [{ scale: 1 }], // Default scale
    transition: 'transform 0.3s ease', // Smooth scaling effect
  },
  gridItemPressed: {
    transform: [{ scale: 0.95 }], // Scale down on press
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  gridText: {
    fontSize: 18,
    color: '#004d40',
    textAlign: 'center',
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop:40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});
