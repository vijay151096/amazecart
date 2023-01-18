import React, {useContext} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {color} from '../../Styles/Color';
import {Pressable} from 'react-native';
import {CartContext} from '../../Store/CartContextProvider';

const DeleteCart = () => {
  const {clearCart} = useContext(CartContext);
  const pressHandler = () => {
    clearCart();
  };
  return (
    <Pressable onPress={pressHandler}>
      <MaterialIcons name={'delete'} size={24} color={color.lightGrey} />
    </Pressable>
  );
};

export default DeleteCart;
