import React, {useState} from  'react';// Componente generar y libreria
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';



export default function App() {
  const [text,setText] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [text2,setText2] = useState('');
  const [displayText2, setDisplayText2] = useState('');

  const [text3,setText3] = useState('');
  const [displayText3, setDisplayText3] = useState('');

  const [text4,setText4] = useState('');
  const [displayText4, setDisplayText4] = useState('');
  // la funcion no tiene nombre solo los parentecis pero como declaramos como constante la funcion se guarda ahi

  const handlesPress = () => {
    setDisplayText(text);
    setText('');
    setDisplayText2(text2);
    setText2('');
    setDisplayText3(text3);
    setText3('');
    setDisplayText4(text4);
    setText4('');
  }

  return (
    <View style={styles.container}>
      <Image source={require('./Componentes/imagen1.jpg')} style={styles.img} />
      <Text style={styles.title}>Formulario</Text>
      <Text>ID</Text>
      <TextInput
        placeholder='id'
        value={text}
        onChangeText={setText}
      />
      <Text>NOMBRE</Text>
      <TextInput
        placeholder='nombre'
        value={text2}
        onChangeText={setText2}
      />

      <Text>EMAIL</Text>
      <TextInput
        placeholder='email'
        value={text3}
        onChangeText={setText3}
      />

      <Text>PHONE</Text>
      <TextInput
        placeholder='phone'
        value={text4}
        onChangeText={setText4}
      />
      <Button title='Click Me!' onPress={handlesPress}/>
      <StatusBar style="auto" />
      
      <Text style={styles.title}>Datos ingresados</Text>
      <Text>ID: {displayText}</Text>
      <Text>NOMBRE: {displayText2}</Text>
      <Text>EMAIL: {displayText3}</Text>
      <Text>PHONE: {displayText4}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 4,
  },
  img: {
    width: 300,
    height: 100,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    
  },
});
