import { View, Text, Button} from 'react-native';
import React, {useState} from 'react';

const Contador = () => {

  const[count,setCount] = useState(0);

  return (

     <View>

      <Text>Você clicou {count} vezes</Text>

      <Button title="Clique Aqui" onPress={() => setCount(count+1)}></Button>
      
    </View>
  );
}

export default Contador
