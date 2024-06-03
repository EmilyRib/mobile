// HomeScreen.jsx
// Importa os componentes View, Text e Button da biblioteca react-native
import { View, Text, Button } from 'react-native';

// Define o componente funcional HomeScreen, que recebe como props o objeto navigation
const HomeScreen = ({navigation}) => {

// Retorna a estrutura do componente HomeScreen
return (

// Define um contêiner View com estilos inline para centralizar o conteúdo
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

{/* Exibe o texto "Home Screen" */}
<Text>Home Screen</Text>

{/* Define um botão que, quando pressionado, navega para a tela "Details" */}
<Button
title="Go to Details" // Define o título do botão
// Define a função a ser chamada quando o botão for pressionado, que navega para a tela "Details"
onPress={() => navigation.navigate('Details')}

/>
</View>
);
};
// Exporta o componente HomeScreen como o componente padrão do módulo
export default HomeScreen;