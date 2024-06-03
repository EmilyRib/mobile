import {Text, View, StyleSheet} from "react-native";

export const CoxinhaItemDet = () =>{
    return(
        <View style={styles.container}>
          
      <Text>Detalhes</Text>
      <Text>Nome:Coxinha</Text>
      <Text></Text>
      <Text>Preço:R$5,50</Text>
      <Text></Text>
      <Text>Descrição</Text>
      <Text>Coxinha de massa de batata, com recheio de frango e catupiry.
            Assada a 180° e servida com suco de açaí.</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      margin:10,
      padding:10,
    },
  

})