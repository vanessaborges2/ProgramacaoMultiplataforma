import React, {useState, useContext} from 'react';
import {View, TextInput, Button, Text, StyleSheet} from 'react-native';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const {setUser} = useContext(UserContext);
    const navigation = useNavigation();

    const acessar = async() => {
        try{
            const resp = await axios.post("http://localhost:3000/api/login", {email, senha});
            const nomeUsuario = resp.data.nome;
            setUser(nomeUsuario);
            navigation.navigate('Home');
        } catch (error){
            console.error(error);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
            <TextInput style={styles.input} placeholder="Senha" value={senha} onChangeText={setSenha} />
            <Button title="Login" onPress={acessar} />
            <Text style={styles.link} onPress={() => navigation.navigate('Registrar')}> Não tem conta? Clique aqui</Text>
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