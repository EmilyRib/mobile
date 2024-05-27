import {Text, View, StyleSheet} from "react-native";

export const CoxinhaItem = () =>{
    return(
        <View style={styles.container}>
          
       <Text style={styles.nome}>Coxinha de Frango</Text>
       <Text style={styles.preco}>R$: 5,50</Text>

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