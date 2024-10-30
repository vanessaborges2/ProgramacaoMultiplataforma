import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const BooksListScreen = () => {
  const { token } = useContext(UserContext);
  const [books, setBooks] = useState([]);
  const navigation = useNavigation();

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/livros/', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBooks(response.data);
    } catch (error) {
      console.error(error);
      alert('Erro ao carregar a lista de livros!');
    }
  };

  useFocusEffect(() => {
    fetchBooks(); 
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.bookItem}>
            <Text style={styles.bookName}>{item.nome}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={styles.iconButton} 
                onPress={() => navigation.navigate('EditBook', { bookId: item.id })}
              >
                <Ionicons name="pencil" size={20} color="white" />
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.iconButton} 
                onPress={() => navigation.navigate('BookDetails', { bookId: item.id })}
              >
                <Ionicons name="search" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  bookItem: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginVertical: 10 
  },
  bookName: { 
    flex: 1, 
    fontSize: 16 
  },
  buttonContainer: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  iconButton: { 
    backgroundColor: '#007BFF',
    borderRadius: 5,
    padding: 5,
    marginLeft: 5,
  },
});

export default BooksListScreen;
