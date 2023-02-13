import React, {useContext, useLayoutEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {lightColor} from '../Styles/LightColor';
import CartList from '../Components/Cart/CartList';
import CartPrice from '../Components/Cart/CartPrice';
import {CartContext} from '../Store/CartContextProvider';
import {ProductContext} from '../Store/ProductContextProvider';
import EmptyCartContent from '../Components/Cart/EmptyCartContent';

function Cart() {
  const {cartProducts} = useContext(CartContext);
  const {getProduct} = useContext(ProductContext);
  const [cartProductJson, setCartProductJson] = useState([]);

  useLayoutEffect(() => {
    const newCartJson = [];
    cartProducts.map(item => {
      newCartJson.push({...getProduct(item.id), quantity: item.quantity});
    });
    setCartProductJson(newCartJson);
  }, [cartProducts]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.detailsContainer}>
        {cartProductJson.length > 0 ? (
          <CartList cartProducts={cartProductJson} />
        ) : (
          <EmptyCartContent />
        )}
      </View>
      {cartProductJson.length > 0 && (
        <View style={styles.priceContainer}>
          <CartPrice cartProds={cartProductJson} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
  detailsContainer: {
    flex: 9,
    padding: 15,
    backgroundColor: lightColor.greyBackground,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    transform: [{translateY: 25}],
  },
  priceContainer: {
    flex: 2,
    backgroundColor: lightColor.white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 8,
    paddingVertical: 1,
  },
});

export default Cart;
