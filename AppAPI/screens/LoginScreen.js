import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser, setToken } = useContext(UserContext); // Adiciona o setToken
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/login', { email, password });
      const userName = response.data.name;
      const userToken = response.data.token; // Obtém o token da resposta
      setUser(userName);  // Armazena o nome do usuário
      setToken(userToken); // Armazena o token no contexto
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <Text
        style={styles.link}
        onPress={() => navigation.navigate('SignUp')}
      >
        Não tem uma conta? Cadastre-se
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
  link: {
    marginTop: 20,
    color: 'blue',
  },
});

export default LoginScreen;
