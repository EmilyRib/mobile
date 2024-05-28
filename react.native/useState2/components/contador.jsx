import { View, Text, Button, StyleSheet} from 'react-native';
import {useState} from 'react';

const Cliente = () => {

  const[nomeCliente,setnomeCliente] = useState("...");

  const clicarBotao1 = () => {
    setnomeCliente("Cliente")
  }

  const clicarBotao2 = () => {
    setnomeCliente("Cliente 2")
  }

  return (

     <View style={styles.texto}>

      <Text>Meu primeiro App</Text>

      <Text></Text>

      <Text>Eu sou o {nomeCliente}</Text>

      <Text></Text>

      <Button title="Mudar para cliente" onPress={clicarBotao1}></Button>

      <Text></Text>

      <Button title="Mudar para cliente 2" onPress={clicarBotao2}></Button>
      
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Cliente
