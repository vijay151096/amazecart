import React, {useContext, useEffect, useState} from 'react';
import {Pressable, SafeAreaView, StyleSheet, View} from 'react-native';
import {ProductContext} from '../../Store/ProductContextProvider';
import ProductImage from '../ProductList/ProductImage';
import ProductDescription from '../ProductList/ProductDescription';
import FavoriteBar from '../ProductList/FavoriteBar';
import ShadowComponent from '../Core/ShadowComponent';

function FavoriteItem({item, bottomSheetHandler}) {
  const [product, setProduct] = useState(null);

  const {getProduct} = useContext(ProductContext);
  useEffect(() => {
    setProduct(getProduct(item));
  }, []);

  return (
    <View style={styles.container}>
      {product && (
        <Pressable onPress={() => bottomSheetHandler(product)}>
          <ShadowComponent style={styles.shadowCont}>
            <SafeAreaView style={styles.inner}>
              <ProductImage image={product.image} />
              <View style={styles.details}>
                <ProductDescription item={product} />
              </View>
              <View style={styles.favBar}>
                <FavoriteBar item={product} size={30} />
              </View>
            </SafeAreaView>
          </ShadowComponent>
        </Pressable>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  inner: {
    flexDirection: 'row',

    overflow: 'hidden',
  },
  details: {
    flex: 1,
    justifyContent: 'space-around',
  },
  favBar: {
    margin: 20,
  },
  shadowCont: {
    borderRadius: 20,
  },
});
export default FavoriteItem;
