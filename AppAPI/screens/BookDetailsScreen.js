import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext';
import { useRoute, useNavigation } from '@react-navigation/native';

const BookDetailsScreen = () => {
  const { token } = useContext(UserContext);
  const [book, setBook] = useState(null);
  const route = useRoute();
  const { bookId } = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/books/${bookId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setBook(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBook();
  }, [bookId, token]);

  const handleDeleteBook = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/books/${bookId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Livro excluído com sucesso!');
      navigation.goBack(); // Volta para a lista de livros após a exclusão
    } catch (error) {
      console.error(error);
    }
  };

  if (!book) return <Text>Carregando...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{book.title}</Text>
      <Text>Autor: {book.author}</Text>
      <Button title="Excluir Livro" onPress={handleDeleteBook} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
});

export default BookDetailsScreen;
