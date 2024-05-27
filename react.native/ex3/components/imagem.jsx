import { View,Image,StyleSheet } from "react-native"

const Imagem = () => {
    return (
        <View>
            <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            style={styles.img}
            />
           
        </View>
    )
}

const styles = StyleSheet.create({
  
    img:{
      width:100,
      height:100
    }
  
  });
  

export default Imagem