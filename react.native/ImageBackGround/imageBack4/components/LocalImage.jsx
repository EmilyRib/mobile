const { View, Text, StatusBar, Button, Alert, ImageBackground } = require("react-native");

const App = () => {
    return (
        <View>
            <StatusBar />

            <ImageBackground
                source={require("../assets/ny2.jpg")}
                style={{ width: 300, height: 200 }}
                imageStyle={{borderRadius:50}}
            >

<Text style={{ color: 'white', alignSelf: "center" }}>New York</Text>


            </ImageBackground>

            <Text></Text>


            <Text style={{ color: 'white', alignSelf: "center" }}>The city that never sleeps</Text>

            <Button
                title="Detalhes"
                onPress={() => Alert.alert('Frank Sinatra')}
                color={'yellow'}
            />

        </View>
    );
};

export default App;