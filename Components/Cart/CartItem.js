import React, {useContext, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import ProductImage from '../ProductList/ProductImage';
import ProductDescription from '../ProductList/ProductDescription';
import {lightColor} from '../../Styles/LightColor';
import Entypo from 'react-native-vector-icons/Entypo';
import {CartContext} from '../../Store/CartContextProvider';

const CartItem = ({item}) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const {updateProductInCart} = useContext(CartContext);

  const increaseQuantity = () => {
    setQuantity(prevState => {
      let newQuantity = prevState + 1;
      updateProductInCart(item.id, newQuantity);
      return newQuantity;
    });
  };

  const decreaseQuantity = () => {
    setQuantity(prevState => {
      let newQuantity = prevState > 0 ? prevState - 1 : 0;
      updateProductInCart(item.id, newQuantity);
      return newQuantity;
    });
  };

  return (
    <View style={styles.screen} testID={'CartItem-outer'}>
      <View style={styles.imageContainer} testID={'CartItem-image'}>
        <ProductImage
          image={item.image}
          innerContainerStyle={styles.innerContainerStyle}
          imageStyle={styles.imageStyle}
        />
      </View>
      <View style={styles.descContainer} testID={'CartItem-desc'}>
        <ProductDescription item={item} />
      </View>
      <View style={styles.quantityContainer} testID={'CartItem-quantity'}>
        <Pressable
          onPress={decreaseQuantity}
          testID={'CartItem-quantity-increase'}>
          <View style={[styles.shadowContainer, styles.minus]}>
            <Entypo
              style={styles.star}
              name="minus"
              size={20}
              color={lightColor.black}
            />
          </View>
        </Pressable>
        <View>
          <Text style={styles.quantity} testID={'CartItem-quantity-value'}>
            {quantity}
          </Text>
        </View>
        <Pressable
          onPress={increaseQuantity}
          testID={'CartItem-quantity-decrease'}>
          <View style={[styles.shadowContainer, styles.plus]}>
            <Entypo
              style={styles.star}
              name="plus"
              size={20}
              color={lightColor.black}
            />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: lightColor.white,
    borderRadius: 20,
    justifyContent: 'space-between',
    padding: 5,
    marginVertical: 5,
  },
  imageContainer: {
    alignItems: 'center',
  },
  descContainer: {
    flex: 3,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  quantityContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  innerContainerStyle: {
    padding: 5,
  },
  imageStyle: {
    height: 50,
    width: 50,
  },
  plus: {
    backgroundColor: lightColor.lightBlue,
    padding: 5,
    borderRadius: 20,
  },
  minus: {
    backgroundColor: lightColor.white,
    padding: 5,
    borderRadius: 20,
  },
  quantity: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  shadowContainer: {
    borderRadius: 20,
    elevation: 5,
    shadowColor: lightColor.lightGrey,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    backgroundColor: 'white',
  },
});

export default CartItem;
