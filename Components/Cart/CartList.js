import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import Animated, {FadeIn, FadeOut, Layout} from 'react-native-reanimated';
import CartItem from './CartItem';

const renderItems = item => {
  return (
    <Animated.View entering={FadeIn} exiting={FadeOut} layout={Layout}>
      <CartItem item={item} />
    </Animated.View>
  );
};

const CartList = ({cartProducts}) => {
  return (
    <FlatList data={cartProducts} renderItem={({item}) => renderItems(item)} />
  );
};

export default CartList;
