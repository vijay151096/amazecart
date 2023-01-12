/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {
  SafeAreaView,
  StyleSheet, Text,
} from "react-native";
import Product from "./Screens/Products/Product";

const App = () => {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <Product />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
});

export default App;
