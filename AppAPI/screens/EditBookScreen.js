import React, { useContext, useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext';
import { useRoute } from '@react-navigation/native';

const EditBookScreen = () => {
  const { token } = useContext(UserContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const route = useRoute();
  const { bookId } = route.params;

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/books/${bookId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setTitle(response.data.title);
        setAuthor(response.data.author);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBook();
  }, [bookId, token]);

  const handleEditBook = async () => {
    try {
      await axios.put(`http://localhost:3000/api/books/${bookId}`, { title, author }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Livro atualizado com sucesso!');
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
      <Button title="Salvar Alterações" onPress={handleEditBook} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 },
});

export default EditBookScreen;
