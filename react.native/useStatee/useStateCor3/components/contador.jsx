import { View, Button, StyleSheet} from 'react-native';
import {useState} from 'react';

export default function Cliente()  {

  const[corFundo,setCorFundo] = useState("white");

  const clicarBotao1 = () => {
    setCorFundo("lightpink")
  }

  const clicarBotao2 = () => {
    setCorFundo("lightblue")
  }

  return (

     <View style={[ {backgroundColor: corFundo}]}>
      
      <Button title="Mudar para rosa" onPress={clicarBotao1}></Button>

      <Button title="Mudar para azul" onPress={clicarBotao2}></Button>
      
    </View>
  );
}

const styles = StyleSheet.create({

  conteiner:{
    justifyContent:"center",
    alignItems:"center"
  },

});

