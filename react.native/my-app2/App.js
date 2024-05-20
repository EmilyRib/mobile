import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.container2}>

      <Text style={styles.Text}>Grupo 05</Text>

      <Text></Text>
      
      <Text style={styles.Text2}>Emily</Text>

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
    fontSize: '40rem',
    fontWeight: 'bold',
    backgroundColor: 'lightyellow',
    color:'lightblue',
  },

  Text2:{
    fontSize: '30rem',
    fontWeight: 'bold',
    backgroundColor: 'lightblue',
    color:'lightyellow',
  },

});
