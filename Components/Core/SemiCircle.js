import React from 'react';
import {StyleSheet, View} from 'react-native';
import useTheme from '../../Store/Hooks/useTheme';

function SemiCircle() {
  const {themeColors} = useTheme();
  return (
    <View
      accessible={true}
      accessibilityLabel={'Login Page Styling'}
      style={[styles.circle, {backgroundColor: themeColors.purple}]}></View>
  );
}

export default SemiCircle;

const styles = StyleSheet.create({
  circle: {
    height: 80,
    width: 80,
    borderRadius: 40,
    left: -40,
  },
});
