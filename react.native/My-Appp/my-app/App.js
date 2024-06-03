import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <Text>Emi</Text>
      <Text></Text>

      <Text>Gaby</Text>
      <Text></Text>

      <Text>Hello World 👋 🌍!</Text>
      <Text></Text>

      <Text>Mary</Text>
      <Text></Text>

      <Text>Py</Text>
      
    </View>
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
