import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CartTitle = ({children, style}) => {
  return <Text style={[styles.innerText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  innerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default CartTitle;
