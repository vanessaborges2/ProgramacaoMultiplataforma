import React, { useContext, useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext';
import { useRoute, useNavigation } from '@react-navigation/native';

const EditBookScreen = () => {
  const { token } = useContext(UserContext);
  const [nome, setNome] = useState('');
  const [autor, setAutor] = useState('');
  const [valor, setValor] = useState('');
  const route = useRoute();
  const { bookId } = route.params;
  const navigation = useNavigation(); 

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/livros/editar/${bookId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setNome(response.data.nome);
        setAutor(response.data.autor);
        setValor(response.data.valor); 
      } catch (error) {
        console.error(error);
      }
    };
    fetchBook();
  }, [bookId, token]);

  const handleEditBook = async () => {
    try {
      await axios.put(`http://localhost:3000/api/livros/editar/${bookId}`, { 
        nome,
        autor,
        valor, 
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Livro atualizado com sucesso!');
      navigation.navigate('BookList');
    } catch (error) {
      console.error(error);
      alert('Erro ao atualizar livro!'); 
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
      <Button title="Salvar Alterações" onPress={handleEditBook} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 },
});

export default EditBookScreen;
