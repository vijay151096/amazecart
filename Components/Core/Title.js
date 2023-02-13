import React, {useContext} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {lightColor} from '../../Styles/LightColor';
import {ThemeContext} from '../../Store/ThemeContextProvider';

function Title() {
  const {themeColors} = useContext(ThemeContext);
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
