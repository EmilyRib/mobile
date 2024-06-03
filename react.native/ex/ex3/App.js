import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text} from 'react-native';
import ClickCounter from './components/contador';
import Imagem from './components/imagem';

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />

     <View style={styles.container}>

      <Imagem/>

      <View style={styles.container2}>
      <Text>Texto</Text>
      <Text>Descrição</Text>
      </View>

     </View>

     <View style={styles.container}>

      <ClickCounter/>
      <ClickCounter/>

     </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 50,
    flexDirection:'row',
    borderStyle: 'dotted',
    borderColor: 'white',
  },

  container2: {
    flexDirection:'column',
  },
});
