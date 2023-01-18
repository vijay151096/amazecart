/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import Navigation from './Navigation';
import ProductDashBoard from './Screens/ProductDashBoard';
import ProductContextProvider from './Store/ProductContextProvider';
import FavoriteContextProvider from './Store/FavoriteContextProvider';
import CartContextProvider from './Store/CartContextProvider';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#F4F6F6" />
      <ProductContextProvider>
        <FavoriteContextProvider>
          <CartContextProvider>
            <View style={styles.outerContainer}>
              <Navigation />
            </View>
          </CartContextProvider>
        </FavoriteContextProvider>
      </ProductContextProvider>
    </>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
});

export default App;
