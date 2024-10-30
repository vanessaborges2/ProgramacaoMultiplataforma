import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { UserProvider } from './contexts/UserContext';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import AddBookScreen from './screens/AddBookScreen';
import BookListScreen from './screens/BooksListScreen';
import EditBookScreen from './screens/EditBookScreen';
import BookDetailsScreen from './screens/BookDetailsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BookTabNavigator = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Home" component={HomeScreen} 
          options={{ 
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }} 
      />
      <Tab.Screen name="AddBook" component={AddBookScreen} 
        options={{ 
          tabBarLabel: 'Novo Livro',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add" size={size} color={color} />
          ),
          title: 'Novo Livro'
        }} 
      />
      <Tab.Screen name="BookList" component={BookListScreen} 
        options={{ 
          tabBarLabel: 'Livros',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
          title: 'Livros'
        }} 
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="App" component={BookTabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="EditBook" component={EditBookScreen} />
          <Stack.Screen name="BookDetails" component={BookDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
