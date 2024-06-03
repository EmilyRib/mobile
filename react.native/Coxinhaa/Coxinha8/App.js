import { StyleSheet, View, Text, Button,Alert} from 'react-native';
import CoxinhaItemEstilo6 from './components/props';

export default function App() {

  const cliqueBoao = () => {
    Alert.alert("Clique no botão com Função")
  }

  return (
    <View style={styles.container}>

      <Text style={styles.texto}>Lista de Salgados</Text>

      <Text></Text>

      <CoxinhaItemEstilo6
      nome="Bauru"
      preço={5}
      aoClicar={() => Alert.alert("Patel de Bauru com Pressable")}/>

<Text></Text>

      <CoxinhaItemEstilo6
      nome="Frango com Requeijão"
      preço={5}
      aoClicar={() => Alert.alert("Patel com Requeijão com Pressable")}/>

<Text></Text>

      <CoxinhaItemEstilo6
      nome="Calabresa"
      preço={7}
      originalPreço={8}
      aoClicar={() => Alert.alert("Patel de Calabresa com Pressable")}/>

<Text></Text>

      <Button 
      title='Botão 1 alert'
      onPress={() => Alert.alert("Texto do primeiro botão")}/>

      <Text></Text>

      <Button 
      title='Botão 2 alert'
      onPress={cliqueBoao}
      color={"green"}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'lightblue'
  },

  texto: {
    fontSize: 20
  }
});