import React, {Children, useState} from 'react';
import {View} from 'react-native';
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

  const login = (username, password) => {
    setAuthToken('authToken');
    setUserId(1);
  };

  const logout = () => {
    setAuthToken(undefined);
    setUserId(undefined);
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
