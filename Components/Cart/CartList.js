import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import CartItem from './CartItem';

const renderItems = item => {
  if (item.quantity === 0) {
    return;
  } else {
    return <CartItem item={item} />;
  }
};

const CartList = ({cartProducts}) => {
  return (
    <FlatList data={cartProducts} renderItem={({item}) => renderItems(item)} />
  );
};

export default CartList;
