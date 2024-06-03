import { View, StyleSheet} from 'react-native';
import MyButton from './components/props';

export default function App() {
  return (
    <View style={styles.container}>
      
  <MyButton title="Clique aqui" onPress={() => alert('Você clicou no botão')}></MyButton>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightyellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


