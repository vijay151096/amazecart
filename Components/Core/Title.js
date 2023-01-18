import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {color} from '../../Styles/Color';

function Title() {
  return (
    <View style={styles.innerContainer}>
      <Text style={[styles.heading, styles.x]}>X</Text>
      <Text style={[styles.heading, styles.e]}>E</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'Georgia',
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
