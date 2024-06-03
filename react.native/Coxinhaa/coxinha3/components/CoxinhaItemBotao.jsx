import { Text,View,Button,Alert} from "react-native"

const Botão = () => {
    return (
        <View>

            <Text>Coxinha de Frango</Text>
            <Text>R$5,50</Text>
            <Button
                title="Adicionar ao carrinho"
                onPress={() => Alert.alert('Coxinha adicionada ao carrinho')} />
        </View>
    )
}

  
export default Botão