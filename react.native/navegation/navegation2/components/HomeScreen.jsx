// Importa os componentes View, Text e Button da biblioteca react-native
import { View, Text, Button } from 'react-native';

// Define o componente HomeScreen, que recebe como props navigation, counter e setCounter
const HomeScreen = ({ navigation, counter, setCounter }) => {

// Retorna a estrutura do componente HomeScreen
return (

// Define um contêiner View com estilos inline para centralizar o conteúdo
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

{/* Exibe o texto "Home Screen" */}
<Text>Home Screen</Text>

{/* Exibe o valor do contador */}
<Text>Contador: {counter}</Text>

{/* Define outro contêiner View para agrupar os botões */}
<View>

{/* Define um botão que incrementa o valor do contador ao ser pressionado */}
<Button title="Adicionar Contador" onPress={() => setCounter(counter + 1)} />

{/* Define um botão que navega para a tela "Detalhes" ao ser pressionado */}
<Button
title="Ir Para Detalhes"
onPress={() => navigation.navigate('Detalhes')}
color={'green'}
/>
</View>
</View>
);
};

// Exporta o componente HomeScreen como o componente padrão do módulo
export default HomeScreen;