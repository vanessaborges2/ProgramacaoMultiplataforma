import React, { useContext, useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext';

const AddBookScreen = () => {
  const { token } = useContext(UserContext);
  const [nome, setNome] = useState('');
  const [autor, setAutor] = useState('');
  const [valor, setValor] = useState('');

  const handleAddBook = async () => {
    try {
      await axios.post('http://localhost:3000/api/livros/novo', {
        nome,
        autor,
        valor,
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Livro adicionado com sucesso!');
      setNome('');
      setAutor('');
      setValor('');
    } catch (error) {
      console.error(error);
      alert('Erro ao adicionar livro!');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do livro"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Autor do livro"
        value={autor}
        onChangeText={setAutor}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor do livro"
        value={valor}
        onChangeText={setValor}
        keyboardType="numeric"
      />
      <Button title="Adicionar Livro" onPress={handleAddBook} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 },
});

export default AddBookScreen;
