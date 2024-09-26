import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native'

const NotificationsScreen = () =>  {
  return (
    <ScrollView style={styles.container}>
        <Text style={styles.title}>Notifications</Text>
    </ScrollView>
  )
}

export default NotificationsScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e0f2f1', // Soft teal background for a calming effect
      padding: 20,
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