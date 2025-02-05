import React from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Text, Appbar, TextInput} from 'react-native-paper';

export default function App() {
  const {text, setText }=React.useState('');
  return (
    <View >
      <Appbar>
        <Appbar.Content title="28 de Enero 2025"/>
      </Appbar>

    <TextInput 
      label="Escribe algo"
      value = {text}
      onChangeText={text => setText(text)}
      textColor='red'
      style={styles.Input}

    />

      <Text>Mi primera imagen!</Text>
      <StatusBar style="auto" />

      <Button mode onPress={() => alert(`Text: ${text}`)}>
        Show The Text
      </Button>
      
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  image: {
    width: 100, 
    height: 100, 
    marginTop: 20,
  },
  Input: {
    marginBottom: 16,
  }
});