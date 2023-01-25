import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {color} from '../../Styles/Color';

function Title() {
  return (
    <View style={styles.innerContainer}>
      <Text
        style={[
          styles.heading,
          styles.x,
          {
            fontFamily: 'LibreBaskerville-Regular',
          },
        ]}>
        X
      </Text>
      <Text
        style={[
          styles.heading,
          styles.e,
          {
            fontFamily: 'LibreBaskerville-Bold',
          },
        ]}>
        E
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  x: {
    color: color.purple,
  },
  e: {
    color: color.lightBlue,
  },
});

export default Title;
