import React, {useContext} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ThemeContext} from '../../Store/ThemeContextProvider';

function ShoppingIcon({color}) {
  return <FontAwesome name={'shopping-bag'} size={24} color={color} />;
}

export default ShoppingIcon;
