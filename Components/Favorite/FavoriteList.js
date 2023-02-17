import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import Animated, {FadeIn, FadeOut, Layout} from 'react-native-reanimated';
import {FavoriteContext} from '../../Store/FavoriteContextProvider';
import FavoriteItem from './FavoriteItem';

function FavoriteList({bottomSheetHandler}) {
  const {favoriteProducts} = useContext(FavoriteContext);
  const renderItem = ({item, index}) => (
    <Animated.View
      entering={FadeIn.delay(index * 250)}
      exiting={FadeOut}
      layout={Layout}>
      <FavoriteItem item={item} bottomSheetHandler={bottomSheetHandler} />
    </Animated.View>
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
