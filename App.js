/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import Navigation from './Navigation';
import ProductDashBoard from './Screens/ProductDashBoard';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#F4F6F6" />
      <SafeAreaView style={styles.outerContainer}>
        <Navigation />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
});

export default App;
