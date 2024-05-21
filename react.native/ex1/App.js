import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Greeting from './components/ex1';

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <Greeting/>
      
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
