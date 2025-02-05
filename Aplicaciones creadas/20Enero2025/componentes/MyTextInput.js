import { TextInput, StyleSheet} from 'react-native';

export default function MyTextInput(){
    return (
        <TextInput
            value = {text}
            style ={styles.input}
        />
        
    );
}

const styles = StyleSheet.create({
    input:{
      height:40,
      margin:17,
      borderRadius:1,
      padding:10,
    }
  });
  