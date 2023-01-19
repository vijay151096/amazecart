import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Children, useEffect, useState} from 'react';
import {View, Alert} from 'react-native';
export const AuthContext = React.createContext({
  isAuthenticated: false,
  authToken: undefined,
  login: (username, password) => {},
  logout: () => {},
  userId: undefined,
});

function AuthContextProvider({children}) {
  const [authToken, setAuthToken] = useState();
  const [userId, setUserId] = useState();

  useEffect(() => {
    const getTokenFromStorage = async () => {
      const tokenFromStorage = await AsyncStorage.getItem('token');
      if (tokenFromStorage) {
        setAuthToken(tokenFromStorage);
        setUserId(1);
      }
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
    if (data.message === 'Invalid credentials') {
      Alert.alert('Login Failed!', 'Could not log you in. Please try again');
    } else {
      setAuthToken(data.token);
      AsyncStorage.setItem('token', data.token);
      setUserId(1);
    }
  };

  const logout = () => {
    setAuthToken(undefined);
    setUserId(undefined);
    AsyncStorage.removeItem('token');
  };

  const value = {
    authToken,
    isAuthenticated: !!authToken,
    login,
    logout,
    userId,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
