import React, { useContext, useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext';

const AddBookScreen = () => {
  const { token } = useContext(UserContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = async () => {
    try {
      await axios.post('http://localhost:3000/api/books', { title, author }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Livro adicionado com sucesso!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Título do livro"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Autor do livro"
        value={author}
        onChangeText={setAuthor}
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
