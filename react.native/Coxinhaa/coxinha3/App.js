import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';
import Botão from './components/CoxinhaItemBotao';

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <Botão/>

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


