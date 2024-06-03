import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet} from 'react-native';
import { CoxinhaItemDet } from './components/CoxinhaItemDetalhes';


export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <CoxinhaItemDet/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin:40,
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


