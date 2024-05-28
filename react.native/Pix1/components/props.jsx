import { View, Text, StyleSheet } from 'react-native';


export default function CoxinhaItemEstilo3() {
  let nome = "Coxinha de Frango"
  let preço = 5
  let originalPreço = 8
   return (
      <View style={styles.conteiner}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.preço}>{`R$: ${preço.toFixed(2)}`}</Text>
        {originalPreço > preço && <Text style={styles.promo}>HOJE TEMOS PROMOÇÃO!!!</Text>}
      </View>
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