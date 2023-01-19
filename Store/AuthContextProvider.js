import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
export const AuthContext = React.createContext({
  isAuthenticated: false,
  authToken: undefined,
  login: (username, password) => {},
  logout: () => {},
  user: undefined,
});

function AuthContextProvider({children}) {
  const [authToken, setAuthToken] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    const getTokenFromStorage = async () => {
      const tokenFromStorage = await AsyncStorage.getItem('token');
      const user = await AsyncStorage.getItem('user');
      if (tokenFromStorage) {
        setAuthToken(tokenFromStorage);
        setUser(JSON.parse(user));
      }
      console.log('useEffect ', user);
    };
    getTokenFromStorage();
  }, []);

  const login = async (username, password) => {
    const bodyToSent = {
      username,
      password,
    };
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(bodyToSent),
    });

    const data = await response.json();
    await findUser(username);
    if (data.message === 'Invalid credentials') {
      Alert.alert('Login Failed!', 'Could not log you in. Please try again');
    } else {
      setAuthToken(data.token);
      AsyncStorage.setItem('token', data.token);
    }
  };

  const findUser = async username => {
    const response = await fetch(
      `https://dummyjson.com/users/filter?key=username&value=${username}`,
    );
    const data = await response.json();
    AsyncStorage.setItem('user', JSON.stringify(data));
    console.log(JSON.stringify(data));
    setUser(data);
  };

  const logout = () => {
    setAuthToken(undefined);
    setUser(undefined);
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('user');
  };

  const value = {
    authToken,
    isAuthenticated: !!authToken,
    login,
    logout,
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
