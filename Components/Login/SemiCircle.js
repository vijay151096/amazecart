import React from 'react';
import {StyleSheet, View} from 'react-native';
import {color} from '../../Styles/Color';

function SemiCircle() {
  return <View style={styles.circle}></View>;
}

export default SemiCircle;

const styles = StyleSheet.create({
  circle: {
    backgroundColor: color.purple,
    height: 80,
    width: 80,
    borderRadius: 40,
    left: -40,
  },
});
