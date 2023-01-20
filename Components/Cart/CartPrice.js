import React, {useContext, useEffect, useState} from 'react';
import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import {color} from '../../Styles/Color';
import Entypo from 'react-native-vector-icons/Entypo';
import {CartContext} from '../../Store/CartContextProvider';
const CartPrice = ({cartProds}) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const {cartProducts} = useContext(CartContext);

  const handlePress = () => {
    Alert.alert('Products Checked Out');
  };
  useEffect(() => {
    let total = 0.0;
    cartProds.map(item => {
      total += parseFloat(item.price) * item.quantity;
    });
    setTotalPrice(total);
  }, [cartProducts, cartProds]);

  return (
    <View style={styles.outerContainer} testID={'CartPrice-outer'}>
      <View style={styles.innerPriceContainer}>
        <View>
          <Text style={styles.currencyText} testID={'CartPrice-dollar'}>
            $
          </Text>
        </View>
        <View>
          <Text style={styles.priceText} testID={'CartPrice-price'}>
            {totalPrice}
          </Text>
        </View>
      </View>
      <Pressable onPress={handlePress} testID={'CartPrice-checkout'}>
        <View style={styles.addToCartContainer}>
          <Entypo name={'shopping-cart'} size={24} color={color.white} />
          <Text style={styles.addToCartText} testID={'CartPrice-checkout-text'}>
            Checkout
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
    zIndex: 10,
  },
  innerPriceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  addToCartContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 17,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: color.purple,
  },
  addToCartText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: color.white,
    paddingLeft: 10,
  },
  currencyText: {
    fontSize: 15,
    paddingTop: 8,
    fontWeight: '900',
    alignSelf: 'flex-start',
  },
  priceText: {
    fontSize: 40,
  },
});

export default CartPrice;
