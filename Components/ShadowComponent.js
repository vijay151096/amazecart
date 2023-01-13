import React from 'react';
import {StyleSheet, View} from 'react-native';

const ShadowComponent = ({children, style}) => {
  return <View style={[styles.shadowContainer, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  shadowContainer: {
    flex: 1,
    elevation: 5,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    backgroundColor: 'white',
  },
});

export default ShadowComponent;
