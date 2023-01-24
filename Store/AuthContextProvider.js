import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Keychain from 'react-native-keychain';
import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
export const AuthContext = React.createContext({
  isAuthenticated: false,
  authToken: undefined,
  login: (username, password) => {},
  logout: () => {},
  user: undefined,
  isGettingTokenFromStorage: false,
});

function AuthContextProvider({children}) {
  const [authToken, setAuthToken] = useState();
  const [user, setUser] = useState();
  const [isGettingTokenFromStorage, setIsGettingTokenFromStorage] =
    useState(false);

  useEffect(() => {
    const getTokenFromStorage = async () => {
      setIsGettingTokenFromStorage(true);
      const credentials = await Keychain.getGenericPassword();
      const user = await AsyncStorage.getItem('user');
      if (credentials && user) {
        setAuthToken(credentials.password);
        setUser(JSON.parse(user));
      }
      setIsGettingTokenFromStorage(false);
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
      Keychain.setGenericPassword(username, data.token);
    }
  };

  const findUser = async username => {
    const response = await fetch(
      `https://dummyjson.com/users/filter?key=username&value=${username}`,
    );
    const data = await response.json();
    AsyncStorage.setItem('user', JSON.stringify(data));
    setUser(data);
  };

  const logout = () => {
    setAuthToken(undefined);
    setUser(undefined);
    Keychain.resetGenericPassword();
  };

  const value = {
    authToken,
    isAuthenticated: !!authToken,
    login,
    logout,
    user,
    isGettingTokenFromStorage,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
