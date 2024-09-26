import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function CustomHeader({ searchQuery, setSearchQuery }) {
  const navigation = useNavigation()
  return (
    <View style={styles.header}>
      {/* Profile Icon on the Left */}
      <TouchableOpacity style={styles.leftIconButton} onPress={()=>navigation.navigate('Profile')}>
        <Ionicons name="person-circle-outline" size={24} color="black" />
      </TouchableOpacity>

      {/* Search Input in the Middle */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="black" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Messages Icon on the Right */}
      <TouchableOpacity style={styles.rightIconButton} onPress={()=>navigation.navigate('Messages')}>
        <Ionicons name="chatbox-ellipses-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',  // Spread items across the header
    paddingVertical: 8,
    marginTop: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',  // White background for search
    borderRadius: 8,
    height:40,
    paddingHorizontal: 10,
    marginHorizontal: 10,  // Space between the search and the icons
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginLeft: 5,
  },
  searchIcon: {
    marginRight: 5,
  },
  leftIconButton: {
    paddingHorizontal: 5,
  },
  rightIconButton: {
    paddingHorizontal: 5,
  },
});
