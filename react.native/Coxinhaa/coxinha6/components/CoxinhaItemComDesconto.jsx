import {Text, View, StyleSheet} from "react-native";

export const CoxinhaDesconto = () =>{

  let nome = "Coxinha de Frango"
  let preco = 10
  let desconto = preco - (5 /100)
  let resul = desconto

    return(
        <View style={styles.container}>
          
       <Text style={[styles.nome, styles.negrito]}>{nome}</Text>
       <Text style={styles.preco}>{`R$: ${preco.toFixed(2)}`}</Text>
       <Text style={styles.nome}>{`Preço com desconsto ${resul}`}</Text>

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