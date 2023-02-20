import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useTheme from '../../Store/Hooks/useTheme';

function Title() {
  const {themeColors} = useTheme();
  return (
    <View style={styles.innerContainer}>
      <Text style={[styles.heading, {color: themeColors.xColor}]}>X</Text>
      <Text style={[styles.heading, {color: themeColors.eColor}]}>E</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontFamily: 'LibreBaskerville-Bold',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Title;
