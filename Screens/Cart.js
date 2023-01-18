import React, {useContext, useEffect, useLayoutEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {color} from '../Styles/Color';
import CartList from '../Components/Cart/CartList';
import CartPrice from '../Components/Cart/CartPrice';
import {CartContext} from '../Store/CartContextProvider';
import ProductContext from '../Store/ProductContext';
import AppLoading from '../Components/Core/AppLoading';

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

  if (cartProductJson.length === 0) {
    return <AppLoading />;
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.detailsContainer}>
        <CartList cartProducts={cartProductJson} />
      </View>
      <View style={styles.priceContainer}>
        <CartPrice cartProds={cartProductJson} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
  detailsContainer: {
    flex: 9,
    padding: 15,
    backgroundColor: color.greyBackground,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    transform: [{translateY: 25}],
  },
  priceContainer: {
    flex: 2,
    backgroundColor: color.white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 8,
    paddingVertical: 1,
  },
});

export default Cart;
