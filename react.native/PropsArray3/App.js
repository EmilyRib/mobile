import { View, StyleSheet} from 'react-native';
import Greeting from './components/props';

const array = [{name:"Emily"},
{name:"Py"},
{name:"Mary"},
{name:"Gaby"}]

export default function App() {
  return (
    <View style={styles.container}>

      {array.map((ass) => (

        <Greeting name={ass.name}/>
        
        ))}

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


