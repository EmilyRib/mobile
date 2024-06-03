const { View, Text, StatusBar, Image, ImageBackground,
} = require("react-native");
const App = () => {
    return (
        <View>
            <StatusBar />

            <ImageBackground
                source={require("../assets/ny.jpg")}
                style={{ width: 300, height: 300 }}
            >


                <Text style={{ color: "white" }}>Texto sobre a imagem</Text>
            </ImageBackground>

        </View>
    );
};
export default App;