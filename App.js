import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Meu texto</Text>
      <TextInput width = '100%' placeholder="escreva aqui" />
      <Button title = "Botão"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
