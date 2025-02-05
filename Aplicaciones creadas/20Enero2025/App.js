import React, {useState} from  'react';// Componente generar y libreria
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';



export default function App() {
  const [text,setText] = useState('');
  const [displayText, setDisplayText] = useState('');
  // la funcion no tiene nombre solo los parentecis pero como declaramos como constante la funcion se guarda ahi
  const handlesPress = () => {
    setDisplayText(text);
    setText('');
  }
  return (
    <View style={styles.container}>
      <Text>Hola Mundo</Text>
      <Text>Text to Show: {displayText}</Text>
      <TextInput
        placeholder='Type Something'
        value={text}
        onChangeText={setText}
      />
      <Button title='Click Me!' onPress={handlesPress}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4169E1',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
