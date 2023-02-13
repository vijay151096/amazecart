import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ImageSection from '../Components/ProductDetails/ImageSection';
import {lightColor} from '../Styles/LightColor';
import DetailSection from '../Components/ProductDetails/DetailSection';
import PriceSection from '../Components/ProductDetails/PriceSection';
import FavoriteBar from '../Components/ProductList/FavoriteBar';
import {ThemeContext} from '../Store/ThemeContextProvider';

function ProductDetails({navigation, route}) {
  const item = route.params.item;
  const {themeColors} = useContext(ThemeContext);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <FavoriteBar item={item} size={30} />,
    });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View
        style={[
          styles.imageOuterContainer,
          {backgroundColor: themeColors.white},
        ]}>
        <ImageSection image={item.image} />
      </View>
      <View
        style={[
          styles.detailsContainer,
          {backgroundColor: themeColors.greyBackground},
        ]}>
        <DetailSection item={item} />
      </View>
      <View
        style={[styles.priceContainer, {backgroundColor: themeColors.white}]}>
        <PriceSection item={item} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
  imageOuterContainer: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsContainer: {
    flex: 4,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    transform: [{translateY: 50}],
  },
  priceContainer: {
    flex: 1.3,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    padding: 8,
  },
});

export default ProductDetails;
