import React, {useContext, useEffect, useState} from 'react';
import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import {lightColor} from '../../Styles/LightColor';
import Entypo from 'react-native-vector-icons/Entypo';
import {CartContext} from '../../Store/CartContextProvider';
import useTheme from '../../Store/Hooks/useTheme';

const CartPrice = ({cartProds}) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const {cartProducts} = useContext(CartContext);
  const {themeColors} = useTheme();

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
        <View
          style={[
            styles.addToCartContainer,
            {backgroundColor: themeColors.purple},
          ]}>
          <Entypo name={'shopping-cart'} size={24} color={themeColors.white} />
          <Text
            style={[styles.addToCartText, {color: themeColors.white}]}
            testID={'CartPrice-checkout-text'}>
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
  },
  addToCartText: {
    fontSize: 16,
    fontWeight: 'bold',

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
