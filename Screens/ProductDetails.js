import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PromotionLabel from '../Components/Core/PromotionLabel';
import ImageSection from '../Components/ProductDetails/ImageSection';
import ProductImage from '../Components/ProductList/ProductImage';
import {color} from '../Styles/Color';
import DetailSection from '../Components/ProductDetails/DetailSection';

function ProductDetails({route}) {
  const item = route.params.item;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageOuterContainer}>
        <ImageSection image={item.image} />
      </View>
      <View style={styles.detailsContainer}>
        <DetailSection item={item} />
      </View>
      <View style={styles.priceContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
  imageOuterContainer: {
    flex: 5,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsContainer: {
    flex: 4,
    backgroundColor: color.greyBackground,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    transform: [{translateY: 50}],
  },
  priceContainer: {
    flex: 1.3,
    backgroundColor: color.white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    padding: 8,
  },
});

export default ProductDetails;
