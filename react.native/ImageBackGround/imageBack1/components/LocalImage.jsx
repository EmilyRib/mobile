const {View,StatusBar,Image,
} = require("react-native");
const App = () => {
return (
<View>
<StatusBar />

{/* //Imagem sendo carregada internamente da pasta assets */}
<Image
source={require("../assets/ny.jpg")}
style={{ width: 150, height:150 }}
/>

</View>
);
};
export default App;