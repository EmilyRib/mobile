import { View,Button,Alert } from "react-native"

const ClickCounter = () => {

    let count = 0;
    
    // function contador() {
    //     var setCount = cont++
    //     return Alert.alert("Você clicou " + setCount + " vezes!")
    // } 

    return (

        <View>

            <Button
                title="Pressione"
                onPress={() => {
                    count +=1
                    return Alert.alert(`Botão pressionado ${count} vezes`)
                } } />

        </View>
    )
}

export default ClickCounter