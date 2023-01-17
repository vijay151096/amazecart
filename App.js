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
import ProductDashBoard from "./Screens/ProductDashBoard";

const App = () => {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <ProductDashBoard />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
});

export default App;
