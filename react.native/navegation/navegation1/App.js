// Importa o componente NavigationContainer do módulo @react-navigation/native
import { NavigationContainer } from '@react-navigation/native';

// Importa a função createNativeStackNavigator do módulo @react-navigation/native-stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importa o componente HomeScreen do arquivo ./screens/HomeScreen
import HomeScreen from './components/HomeScreen'; // Supondo que você tenha uma tela HomeScreen

// Importa o componente DetailsScreen do arquivo ./screens/DetailsScreen
import DetailsScreen from './components/DetailsScreen'; // Supondo que você tenha uma tela DetailsScreen

// Cria uma instância do stack navigator
const Stack = createNativeStackNavigator();

// Define o componente principal do aplicativo como uma função
const App = () => {
// Retorna a estrutura do componente
return (
// Envolve toda a navegação dentro do NavigationContainer
<NavigationContainer>

{/* Define um Stack Navigator com a rota inicial "Home" */}
<Stack.Navigator initialRouteName="Home">

{/* Define a primeira tela do Stack Navigator chamada "Home" e associa ao comp
onente HomeScreen */}
<Stack.Screen name="Home" component={HomeScreen} />

{/* Define a segunda tela do Stack Navigator chamada "Details" e associa ao co
mponente DetailsScreen */}
<Stack.Screen name="Details" component={DetailsScreen} />
</Stack.Navigator>
</NavigationContainer>
);
}
// Exporta o componente App como o componente padrão do módulo
export default App;