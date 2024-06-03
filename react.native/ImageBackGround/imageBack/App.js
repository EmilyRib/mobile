const {View,Text,StatusBar,Image,ImageBackground,
    } = require("react-native");
    const App = () => {
    return (
    <View>
    <StatusBar />
    <Text>Meu Primeiro App</Text>
    <Text></Text>
    
    {/* //Imagem sendo carregada externamente */}
    <Image
    source={{ uri: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/aa/b0/fd/caption.jpg?w=600&h=-1&s=1" }} style={{ width: 200, height: 200 }}
 />
    {/* //Imagem sendo carregada internamente da pasta assets */}
    <Image
    source={require("./assets/ny.jpg")}
    style={{ width: 200, height: 200 }}
    />
    <ImageBackground
    source={require("./as/ny.jpg")}
    style={{ width: 300, height: 300 }}
    >
    
    
    <Text style={{ color: "white" }}>Texto sobre a imagem</Text>
    </ImageBackground>
    </View>
    );
    };
    export default App;