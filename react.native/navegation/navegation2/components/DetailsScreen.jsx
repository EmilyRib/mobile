// Importa os componentes View, Text e Button da biblioteca react-native
import { View, Text, Button } from 'react-native';

// Define o componente DetailsScreen, que recebe como props navigation e counter
const DetailsScreen = ({ navigation, counter }) => {

// Retorna a estrutura do componente DetailsScreen
return (

// Define um contêiner View com estilos inline para centralizar o conteúdo
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

{/* Exibe o texto "Details Screen" */}
<Text>Details Screen</Text>

{/* Exibe o valor do contador */}
<Text>Contador: {counter}</Text>

{/* Define um botão que navega para a tela "Home" ao ser pressionado */}
<Button
title="Ir para Home"
onPress={() => navigation.navigate('Home')}
/>
</View>
);
};
// Exporta o componente DetailsScreen como o componente padrão do módulo
export default DetailsScreen;