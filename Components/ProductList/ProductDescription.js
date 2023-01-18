import React from 'react';
import {StyleSheet, Text} from 'react-native';

const ProductDescription = ({item}) => {
  return (
    <>
      <Text style={styles.detailText}>{item.title}</Text>
      <Text style={styles.detailPrice}> $ {item.price}</Text>
    </>
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
