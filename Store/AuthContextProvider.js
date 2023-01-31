import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Keychain from 'react-native-keychain';
import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export const AuthContext = React.createContext({
  isAuthenticated: false,
  authToken: undefined,
  login: (username, password) => {},
  logout: () => {},
  user: undefined,
  isGettingTokenFromStorage: false,
  googleSignIn: () => {},
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

  const googleSignIn = () => {
    GoogleSignin.configure({
      androidClientId:
        '884849589655-8ht6ej48792ppl5roammli850vm8fn43.apps.googleusercontent.com',
      iosClientId:
        '884849589655-mpie7j74t18u5ou4hkiria7kgul4qtlu.apps.googleusercontent.com',
      webClientId:
        '884849589655-c7dorv0kn0suvhifdog8uuoq7knn8uav.apps.googleusercontent.com',
      offlineAccess: true,
    });
    GoogleSignin.hasPlayServices()
      .then(hasPlayService => {
        if (hasPlayService) {
          GoogleSignin.signIn()
            .then(userInfo => {
              setAuthToken(userInfo.idToken);

              Keychain.setGenericPassword(userInfo.user.name, userInfo.idToken);
              AsyncStorage.setItem('user', JSON.stringify(userInfo.user));
              setUser(userInfo.user);
            })
            .catch(e => {
              console.log('ERROR IS: ' + JSON.stringify(e));
            });
        }
      })
      .catch(e => {
        console.log('ERROR IS: ' + JSON.stringify(e));
      });
  };

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
    googleSignIn,
    isGettingTokenFromStorage,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
