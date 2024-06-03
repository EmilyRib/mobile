import { Text,View,Image,StyleSheet } from "react-native"

const Imagem = () => {
    return (
        <View>
            <Image source={{ uri: 'https://img.saborosos.com.br/imagens/coxinha-de-frango-com-catupiry.jpg'}}
            style={styles.img}
            />

            <View style={styles.texto}>
            <Text>Coxinha</Text>
            <Text>R$5,50</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
  
    img:{
      width:100,
      height:100
    },

    texto:{
      alignItems:'center'
    }
  
  });
  

export default Imagem