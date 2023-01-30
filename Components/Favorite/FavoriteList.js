import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import {FavoriteContext} from '../../Store/FavoriteContextProvider';
import FavoriteItem from './FavoriteItem';

function FavoriteList() {
  const {favoriteProducts} = useContext(FavoriteContext);
  console.log(favoriteProducts);
  const renderItem = ({item}) => <FavoriteItem item={item} />;
  return <FlatList data={favoriteProducts} renderItem={renderItem} />;
}

export default FavoriteList;
