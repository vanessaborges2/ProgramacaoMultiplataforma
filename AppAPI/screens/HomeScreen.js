import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UserContext } from '../contexts/UserContext';

const HomeScreen = () => {
  const { user } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Seja Bem Vindo, {user}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
