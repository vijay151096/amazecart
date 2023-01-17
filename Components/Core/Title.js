import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

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
    color: '#9B59B6',
  },
  e: {
    color: '#AED6F1',
  },
});

export default Title;
