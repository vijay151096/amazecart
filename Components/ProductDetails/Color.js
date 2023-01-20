import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SizeBox from './SizeBox';
import {color} from '../../Styles/Color';
import ColorTile from './ColorTile';

function Color() {
  return (
    <View style={styles.outerContainer} testID="Color-mainContainer">
      <Text style={[styles.text, styles.sizeText]}>Available Color : </Text>
      <ColorTile outerColor={'#FADBD8'} innerColor={'red'} />
      <ColorTile outerColor={'#FCF3CF'} innerColor={'orange'} />
      <ColorTile outerColor={'#F5D3F3'} innerColor={'#F692F0'} />
      <ColorTile outerColor={'#D6EAF8'} innerColor={'blue'} />
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  outeCircle: {
    padding: 1,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  colorPicker: {
    padding: 12,
    borderRadius: 15,
    margin: 7,
  },
  sizeText: {
    color: color.lightGrey,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default Color;
