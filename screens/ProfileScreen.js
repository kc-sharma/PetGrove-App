import { StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native'
import { getAuth } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () =>  {
  const navigation = useNavigation();
  const auth = getAuth()
  const handleSignOut = ( ) => {
    auth
    .signOut()
    .then(()=>{
      navigation.replace("Login")
    })
    .catch(error => alert(error.mesage))
  }
  return (
    <ScrollView style={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <Text>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity
          style = {styles.button}
          onPress={handleSignOut}
          >
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
    </ScrollView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e0f2f1', // Soft teal background for a calming effect
      padding: 20,
    },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop:40,
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
    }
}
)