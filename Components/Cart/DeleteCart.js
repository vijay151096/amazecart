import React, {useContext} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {lightColor} from '../../Styles/LightColor';
import {Pressable} from 'react-native';
import {CartContext} from '../../Store/CartContextProvider';
import {ThemeContext} from '../../Store/ThemeContextProvider';

const DeleteCart = () => {
  const {clearCart} = useContext(CartContext);
  const {themeColors} = useContext(ThemeContext);
  const pressHandler = () => {
    clearCart();
  };
  console.log(themeColors.background);
  return (
    <Pressable onPress={pressHandler} testID={'DeleteCart-deleteIcon'}>
      <MaterialIcons name={'delete'} size={24} color={themeColors.lightGrey} />
    </Pressable>
  );
};

export default DeleteCart;
