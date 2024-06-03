import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet} from 'react-native';
import { CoxinhaDesconto } from './components/CoxinhaItemComDesconto';

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <CoxinhaDesconto/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin:40,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


