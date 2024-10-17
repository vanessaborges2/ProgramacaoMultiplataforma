import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext';
import { useNavigation } from '@react-navigation/native';

const BooksListScreen = () => {
  const { token } = useContext(UserContext);
  const [books, setBooks] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/books', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setBooks(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBooks();
  }, [token]);

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.bookItem}>
            <Text>{item.title}</Text>
            <Button title="Edit" onPress={() => navigation.navigate('EditBook', { bookId: item.id })} />
            <Button title="Details" onPress={() => navigation.navigate('BookDetails', { bookId: item.id })} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  bookItem: { marginVertical: 10 },
});

export default BooksListScreen;
