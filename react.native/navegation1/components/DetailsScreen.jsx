// DetailsScreen.jsx
// Importa os componentes View, Text e Button da biblioteca react-native
import { View, Text, Button } from 'react-native';
// Define o componente funcional DetailsScreen, que recebe como props o objeto navigation
const DetailsScreen = ({ navigation }) => {
// Retorna a estrutura do componente DetailsScreen
return (
// Define um contêiner View com estilos inline para centralizar o conteúdo
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
{/* Exibe o texto "Details Screen" */}
<Text>Details Screen</Text>
{/* Define um botão que, quando pressionado, navega para a tela "Home" */}
<Button
title="Go to Home" // Define o título do botão
// Define a função a ser chamada quando o botão for pressionado, que navega para a tela "Home"
onPress={() => navigation.navigate('Home')}
/>
</View>
);
};
// Exporta o componente DetailsScreen como o componente padrão do módulo
export default DetailsScreen;