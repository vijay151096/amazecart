import React from 'react';
import {StyleSheet, View} from 'react-native';
import {lightColor} from '../../Styles/LightColor';

function SemiCircle() {
  return (
    <View
      accessible={true}
      accessibilityLabel={'Login Page Styling'}
      style={styles.circle}></View>
  );
}

export default SemiCircle;

const styles = StyleSheet.create({
  circle: {
    backgroundColor: lightColor.purple,
    height: 80,
    width: 80,
    borderRadius: 40,
    left: -40,
  },
});
