import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet} from 'react-native';
import { CoxinhaQuantidade } from './components/CoxinhaItemComQuantidade'


export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <Text>Lista de Salgados</Text>

      <CoxinhaQuantidade/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin:40,
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


