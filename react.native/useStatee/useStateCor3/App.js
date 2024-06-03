import { View, StyleSheet} from 'react-native';
import Cliente from './components/contador';

export default function App() {
  return (
    <View style={styles.container}>

      <Cliente/>

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


