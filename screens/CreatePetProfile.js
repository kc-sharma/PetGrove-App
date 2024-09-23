import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

const CreatePetProfile = () => {
  const [petName, setPetName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [healthNotes, setHealthNotes] = useState('');
  const [image, setImage] = useState(null);

  const navigation = useNavigation();

  const handleImagePick = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Error picking image:", error);
    }
  };

  const handleSave = () => {
    // Implement the save logic
    console.log({
      petName,
      species,
      breed,
      birthDate,
      gender,
      weight,
      healthNotes,
      image,
    });
    
    navigation.navigate('Home'); 
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Create Profile for Your Pet</Text>

      <TouchableOpacity onPress={handleImagePick}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <View style={styles.imagePlaceholder}>
            <Text style={styles.imagePlaceholderText}>Tap to add a photo</Text>
          </View>
        )}
      </TouchableOpacity>

      <Text style={styles.label}>Your Pet's Name</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Chopper"
        value={petName}
        onChangeText={setPetName}
      />
      <Text style={styles.label}>Your Pet's Species</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Dog, Cat"
        value={species}
        onChangeText={setSpecies}
      />
      <Text style={styles.label}>Your Pet's Breed</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. German Shepherd"
        value={breed}
        onChangeText={setBreed}
      />
      <Text style={styles.label}>Your Pet's Date of Birth</Text>
      <TextInput
        style={styles.input}
        placeholder="(YYYY-MM-DD)"
        value={birthDate}
        onChangeText={setBirthDate}
      />
      <Text style={styles.label}>Your Pet's Gender</Text>
      <TextInput
        style={styles.input}
        placeholder="Male/Female"
        value={gender}
        onChangeText={setGender}
      />
      <Text style={styles.label}>Your Pet's Weight</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. 20kg"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Any Health Notes for your pet</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="e.g. allergic to certain conditions"
        value={healthNotes}
        onChangeText={setHealthNotes}
        multiline
      />

      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={handleSave} color="#4CAF50" />
        <Button title="Cancel" onPress={() => navigation.goBack()} color="#F44336" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0f2f1',
    padding: 20,
  },
  header: {
    marginTop: 50,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  label: {
    marginBottom: 5,
    marginLeft: 5,
    fontSize: 16,
    color: 'blue',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  imagePlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  imagePlaceholderText: {
    color: '#888',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default CreatePetProfile;
