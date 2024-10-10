import {View, TextInput, Button, Text, StyleSheet} 
  from 'react-native';
import React, {useState} from 'react';

const Exemplo1 = () => {

  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState('');

  const somar = () => {
    const total = parseFloat(valor1) + parseFloat(valor2);
    setResultado(total);
    setValor1("");
    setValor2("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Primeiro Aplicativo</Text>
      <TextInput style={styles.input}
          keyboard="numeric" placeholder="Valor 1"
          value={valor1} onChangeText={setValor1}/>
      <TextInput style={styles.input}
          keyboard="numeric" placeholder="Valor 2"
          value={valor2} onChangeText={setValor2}/>
      <Button title="Somar" onPress={somar}/>
      <Text style={styles.title}>Resultado: {resultado}</Text>
    </View>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 20,
      paddingHorizontal: 10,
    },
    title: {
      fontWeight: 'bold',
    },
  }
);

export default Exemplo1;

