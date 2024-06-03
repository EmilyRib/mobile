const { View, StatusBar, Image, StyleSheet
} = require("react-native");
const App = () => {
    return (
        <View style={styles.container}>
            <StatusBar />

            {/* //Imagem sendo carregada internamente da pasta assets */}
            <Image
                source={require("../assets/ny.jpg")}
                style={{ width: 100, height: 100 }}
            />

            <Image
                source={require("../assets/ny2.jpg")}
                style={{ width: 100, height: 100 }}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
    }
});

export default App;