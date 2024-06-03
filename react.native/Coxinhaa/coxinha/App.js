import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet} from 'react-native';
import { CoxinhaItemDet } from '../coxinha1/components/CoxinhaItemDetalhes';


export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <Text>Lista de Salgados</Text>

      <CoxinhaItemDet/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin:40,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


