import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet} from 'react-native';
import App from './components/LocalImage';

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <Text>Lista de Salgados</Text>

      <CoxinhaItemEstilo2/>

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


