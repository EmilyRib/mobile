import { View, Text, StyleSheet,Pressable } from 'react-native';


export default function CoxinhaItemEstilo6(props) {
 
   return (

    <Pressable onPress={props.aoClicar}>
      <View style={styles.conteiner}>

        <Text style={styles.nome}>{props.nome}</Text>

        <Text style={styles.preço}>{`R$: ${props.preço.toFixed(2)}`}</Text>

        {props.originalPreço && props.originalPreço > props.preço && (
           <Text style={styles.promo}>HOJE TEMOS PROMOÇÃO!!!</Text>
          )}

      </View>
      </Pressable>
    );
  }

const styles = StyleSheet.create({
  conteiner: {
    margin: 10,
    padding: 10,
    backgroundColor: "#CCC",
  },

  nome: {
    fontSize: 17,
    fontWeight: "bold",
  },

  preço: {
    fontSize: 15,
  },

  promo: {
    fontSize: 16,
    fontWeight: "bold"
  },
})