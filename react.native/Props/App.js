import { View, StyleSheet} from 'react-native';
import Greeting from './components/props';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Greeting name="Bob"/>
      <Greeting name="Bob"/>
      <Greeting name="Bob"/>
      <Greeting name="Alice"/>

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


