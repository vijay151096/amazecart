import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ProductDescription = ({item}) => {
  return (
    <View>
      <Text style={styles.detailText}>{item.title}</Text>
      <Text style={styles.detailPrice}> $ {item.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detailText: {
    color: '#460178',
    fontSize: 14,
    padding: 5,
  },
  detailPrice: {
    color: '#460178',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
  },
});

export default ProductDescription;
