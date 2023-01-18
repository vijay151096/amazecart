import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ImageSection from '../Components/ProductDetails/ImageSection';
import {color} from '../Styles/Color';
import DetailSection from '../Components/ProductDetails/DetailSection';
import PriceSection from '../Components/ProductDetails/PriceSection';
import FavoriteBar from '../Components/ProductList/FavoriteBar';

function ProductDetails({navigation, route}) {
  const item = route.params.item;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <FavoriteBar item={item} size={30} />,
    });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageOuterContainer}>
        <ImageSection image={item.image} />
      </View>
      <View style={styles.detailsContainer}>
        <DetailSection item={item} />
      </View>
      <View style={styles.priceContainer}>
        <PriceSection item={item} />
      </View>
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
