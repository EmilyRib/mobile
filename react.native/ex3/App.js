import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ClickCounter from './components/ex2';

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <ClickCounter/>
      
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
