import React, {useContext} from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {AuthContext} from '../Store/AuthContextProvider';
import {ActivityIndicator, View} from 'react-native';
import {ThemeContext} from '../Store/ThemeContextProvider';
import ProductStack from './ProductStack';
import AuthenticationStack from './AuthenticationStack';

function MainNavigation() {
  const {isDarkMode} = useContext(ThemeContext);
  const {isAuthenticated, isGettingTokenFromStorage} = useContext(AuthContext);

  if (isGettingTokenFromStorage) {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      {isAuthenticated ? <ProductStack /> : <AuthenticationStack />}
    </NavigationContainer>
  );
}

export default MainNavigation;
