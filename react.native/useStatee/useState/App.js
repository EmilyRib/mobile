import { View, StyleSheet} from 'react-native';
import Contador from './components/contador';

export default function App() {
  return (
    <View style={styles.container}>

      <Contador/>

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


