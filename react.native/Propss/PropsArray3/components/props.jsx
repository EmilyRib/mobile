import { Text, StyleSheet } from 'react-native';

const Greeting = (props) => {

  return <Text style={styles.texto}>Hello,{props.name}</Text>

}


const styles = StyleSheet.create({
  texto: {
    
    alignItems: 'center',
    justifyContent: 'center',
    color:"lightpink",
  },
});

export default Greeting
