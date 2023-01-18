import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const EmptyCartContent = () => {
  return (
    <View style={styles.outerContainer}>
      <Text style={styles.innerText}>Cart is Empty !!</Text>
      <Text style={styles.innerText}>Hurry Fill the Cart</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EmptyCartContent;
