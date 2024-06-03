import { useState } from 'react';
import { StyleSheet, View, TextInput, SafeAreaView,Text } from 'react-native';

export default function App() {


  const [campoNome, setCampoNome] = useState("")

  return (
    <View style={styles.container}>
      <SafeAreaView>

        <TextInput
          style={styles.input}
          placeholder='Digite seu nome'
          placeholderTextColor='lightpink'
          value={campoNome}
          onChangeText={(texto) => setCampoNome(texto)} />

        <Text style={styles.text}> Numero de caracteres digitados:{campoNome.length}</Text>

      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightyellow'
  },

  texto: {
    fontSize: 20
  },

  input: {
    backgroundColor: "lightblue",
    padding: 10,
    width: "100%",
    marginBottom: 20,
    borderRadius: 5,
  },

  text: {
    fontSize: 18
  }
});