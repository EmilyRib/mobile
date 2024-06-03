const {View,Text,StatusBar,StyleSheet,ImageBackground,
} = require("react-native");
const App = () => {
return (
<View>
<StatusBar />

<ImageBackground
    source={require("../assets/ny2.jpg")}
    style={{ width: 500, height: 500 }}
    styles={styles.container}
    >
    
    <Text style={{ color: "white" }}>New York</Text>
    </ImageBackground>

</View>
);
};

const styles = StyleSheet.create({
    container: {
        borderCurve:'circular'
      }
  });
export default App;