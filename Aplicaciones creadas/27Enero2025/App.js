import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Mi primera imagen!</Text>
      <StatusBar style="auto" />
      
      {/* Agregar una imagen desde un URL */}
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
      />
      {/* Si quieres agregar una imagen local */}
      {/* <Image
        source={require('./assets/your-local-image.png')}
        style={styles.image}
      /> */}
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
  image: {
    width: 100, // Ajusta el ancho de la imagen
    height: 100, // Ajusta el alto de la imagen
    marginTop: 20, // Espacio arriba de la imagen
  },
});