import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import {FavoriteContext} from '../../Store/FavoriteContextProvider';
import FavoriteItem from './FavoriteItem';

function FavoriteList({bottomSheetHandler}) {
  const {favoriteProducts} = useContext(FavoriteContext);
  const renderItem = ({item}) => (
    <FavoriteItem item={item} bottomSheetHandler={bottomSheetHandler} />
  );
  return (
    <FlatList
      data={favoriteProducts}
      keyExtractor={item => item}
      renderItem={renderItem}
    />
  );
}

export default FavoriteList;
