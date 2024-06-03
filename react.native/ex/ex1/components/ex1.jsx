import { View, Text, Button,Alert } from "react-native"

const Greeting = () => {

    return (
        <View>

            <Text>Olá, React Native!</Text>

            <Button
                title="Pressione"
                onPress={() => Alert.alert('Olá, Mundo')} />

        </View>
    )
}

export default Greeting