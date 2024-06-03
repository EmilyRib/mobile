import {Text, View, StyleSheet} from "react-native";

export const CoxinhaQuantidade = (props) =>{

  let nome = "Coxinha de Frango";
  let preco = 5
  let origem = "Casa da tia"

    return(
        <View style={styles.container}>
          
       <Text style={[styles.nome, styles.negrito]}>{nome}</Text>
       <Text style={styles.preco}>{`R$: ${preco.toFixed(2)}`}</Text>
       <Text style={styles.nome}>{`Origem:${origem}`}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      margin:10,
      padding:10,
      backgroundColor:'#CCC'
    },
  
  
    nome: {
      fontSize: 15,
      fontWeight: 'bold',
    },

    preco:{
        fontSize:13,
        color:"red"
    }

})