import React from 'react';
import ProductDescription from '../ProductList/ProductDescription';
import {StyleSheet, View} from 'react-native';
import FavoriteBar from '../ProductList/FavoriteBar';
import PromotionLabel from '../Core/PromotionLabel';
import Size from '../ProductDetails/Size';
import Color from '../ProductDetails/Color';
import PriceSection from '../ProductDetails/PriceSection';
import DetailSection from '../ProductDetails/DetailSection';

function FavoriteBsDetails({item}) {
  return (
    <>
      <View style={styles.outer}>
        <View style={styles.header}>
          <PromotionLabel />
          <FavoriteBar item={item} size={25} />
        </View>
        <ProductDescription item={item} />
      </View>
      <DetailSection
        item={item}
        outerContainerStyle={styles.detailSectionStyle}
      />
    </>
  );
}

const styles = StyleSheet.create({
  outer: {
    marginHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  detailSectionStyle: {
    paddingVertical: 15,
  },
});

export default FavoriteBsDetails;