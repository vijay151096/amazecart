import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DetailTitle from './DetailTitle';
import Size from './Size';
import Color from './Color';

function DetailSection({item}) {
  return (
    <View style={styles.outerContainer}>
      <DetailTitle
        title={item.description.slice(0, 20) + '...'}
        description={item.description.slice(0, 100) + '...'}
        rating={4.5}
      />
      <Size />
      <Color />
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    paddingVertical: 35,
    paddingHorizontal: 25,
  },
});

export default DetailSection;
