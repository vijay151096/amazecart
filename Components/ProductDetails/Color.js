import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Color() {
  return (
    <View>
      <Text>Hello from color</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
      marginVertical: 20,
  },
});

export default Color;
