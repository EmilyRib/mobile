import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Com from './components/componente1';
import { Um,Dois } from './components/componente2';
import Imagem from './components/imagem';
import Botão from './components/button';


export default function App() {

  var varia = 'Yo mesma'

  return (
    <View style={styles.container}>

      <View style={styles.container2}>

      <Text style={styles.Text}>Grupo 05</Text>

      <Text></Text>
      
      <Text style={styles.Text2}>Emily</Text>

      <Text></Text>

      <Text style={styles.Text}>{varia}</Text>

      <Text></Text>
      
    <Com/>

    <Um/>

    <Dois/>

    <Imagem />

    <Botão/>

    </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    flexDirection:'column',
  },

  container2: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: 'white',
    alignItems: 'center',
    },

  Text:{
    fontSize: 40,
    fontWeight: 'bold',
    backgroundColor: 'lightyellow',
    color:'lightblue',
  },

  Text2:{
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'lightblue',
    color:'lightyellow',
  },

});
