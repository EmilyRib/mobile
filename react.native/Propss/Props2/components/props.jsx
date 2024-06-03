import { StyleSheet,Button } from 'react-native';

const MyButton = (props) => {

  return <Button title={props.title} onPress={props.onPress}></Button>

}


const styles = StyleSheet.create({
  texto: {
    
    alignItems: 'center',
    justifyContent: 'center',
    color:"lightpink",
  },
});

export default MyButton
