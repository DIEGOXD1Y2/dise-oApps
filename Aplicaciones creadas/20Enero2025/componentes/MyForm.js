import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function MyForm(){
    const [text,setText] = useState('');
    const [displayText, setDisplayText] = useState('');
    // la funcion no tiene nombre solo los parentecis pero como declaramos como constante la funcion se guarda ahi
    const handlesPress = () => {
      setDisplayText(text);
      setText('');
    }
    return(
    <View c>
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
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });