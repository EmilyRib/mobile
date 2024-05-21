import { View,Button,Alert } from "react-native"

const Botão = () => {
    return (
        <View>
            <Button
                title="Pressione"
                onPress={() => Alert.alert('Botão pressionado')} />
        </View>
    )
}



export default Botão