import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import MyTextInput from './componets/MyTextInput';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola mundo</Text>
      <MyTextInput
        text={"Hola"}
      />
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
