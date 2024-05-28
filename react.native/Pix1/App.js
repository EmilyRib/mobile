import { StyleSheet, View, Text} from 'react-native';
import CoxinhaItemEstilo3 from './components/props';

export default function App() {

  return (
    <View style={styles.container}>

      <Text style={styles.texto}>Lista de Salgados</Text>

      <Text></Text>

      <CoxinhaItemEstilo3></CoxinhaItemEstilo3>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto: {
    fontSize: 20
  }
});