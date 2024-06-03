// Importa o componente NavigationContainer do módulo @react-navigation/native
import { NavigationContainer } from '@react-navigation/native';

// Importa a função createNativeStackNavigator do módulo @react-navigation/native-stac
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importa o componente HomeScreen do arquivo ./screens/HomeScreen
import HomeScreen from './components/HomeScreen';

// Importa o componente DetailsScreen do arquivo ./screens/DetailsScreen
import DetailsScreen from './components/DetailsScreen';

// Importa o hook useState da biblioteca React
import { useState } from 'react';

// Cria uma instância do stack navigator, que será usada para definir as telas e a navegação entre elas
const Stack = createNativeStackNavigator();

// Define o componente principal do aplicativo
function App() {

// Define um estado chamado counter e uma função setCounter para atualizá-lo, com valor inicial 0
const [counter, setCounter] = useState(0);

// Retorna a estrutura do componente, que inclui o NavigationContainer e as telas definidas no Stack.Navigator
return (

// Envolve toda a navegação dentro do NavigationContainer, que gerencia o estado da navegação e links do app
<NavigationContainer>

{/* Define um Stack Navigator com a rota inicial "Home", que gerencia a navegaçã
o entre as telas */}
<Stack.Navigator initialRouteName="Home">

{/* Define a primeira tela do Stack Navigator chamada "Home" */}
<Stack.Screen name="Home">

{/* Renderiza o componente HomeScreen e passa as propriedades, incluindo cou
nter e setCounter */}
{(props) => (
<HomeScreen {...props} counter={counter} setCounter={setCounter} />
)}
</Stack.Screen>

{/* Define a segunda tela do Stack Navigator chamada "Detalhes" */}
<Stack.Screen name="Detalhes">
    
{/* Renderiza o componente DetailsScreen e passa as propriedades, incluindo
counter */}
{(props) => <DetailsScreen {...props} counter={counter} />}
</Stack.Screen>
</Stack.Navigator>
</NavigationContainer>
);
}
// Exporta o componente App como o componente padrão do módulo
export default App;