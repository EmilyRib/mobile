import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet} from 'react-native';
import App from './components/LocalImage';

export default function Ap() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <App/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


