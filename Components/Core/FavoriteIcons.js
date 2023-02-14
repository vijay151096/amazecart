import React, {useContext} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ThemeContext} from '../../Store/ThemeContextProvider';

function FavoriteIcons({color}) {
  return <AntDesign name={'heart'} size={24} color={color} />;
}

export default FavoriteIcons;
