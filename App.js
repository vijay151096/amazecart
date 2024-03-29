/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import ProductContextProvider from './Store/ProductContextProvider';
import FavoriteContextProvider from './Store/FavoriteContextProvider';
import CartContextProvider from './Store/CartContextProvider';
import AuthContextProvider from './Store/AuthContextProvider';
import ThemeContextProvider from './Store/ThemeContextProvider';
import MainNavigation from './Navigation/MainNavigation';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#F4F6F6" />
      <ThemeContextProvider>
        <AuthContextProvider>
          <ProductContextProvider>
            <FavoriteContextProvider>
              <CartContextProvider>
                <View style={styles.outerContainer}>
                  <MainNavigation />
                </View>
              </CartContextProvider>
            </FavoriteContextProvider>
          </ProductContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
});

export default App;
