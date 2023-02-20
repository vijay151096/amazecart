import React, {useContext} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {lightColor} from '../../Styles/LightColor';
import {Pressable} from 'react-native';
import {CartContext} from '../../Store/CartContextProvider';
import useTheme from '../../Store/Hooks/useTheme';

const DeleteCart = () => {
  const {clearCart} = useContext(CartContext);
  const {themeColors} = useTheme()
  const pressHandler = () => {
    clearCart();
  };

  return (
    <Pressable onPress={pressHandler} testID={'DeleteCart-deleteIcon'}>
      <MaterialIcons name={'delete'} size={24} color={themeColors.lightGrey} />
    </Pressable>
  );
};

export default DeleteCart;
