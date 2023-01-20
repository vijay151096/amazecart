import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useContext, useState, useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import {FavoriteContext} from '../../Store/FavoriteContextProvider';
import {color} from '../../Styles/Color';

const FavoriteBar = ({item, size}) => {
  const {addProductToFavorite, removeProductFromFavorite, favoriteProducts} =
    useContext(FavoriteContext);
  const {id} = item;

  const getIdIfAlreadyFavorite = itemId => {
    return favoriteProducts.find(productId => productId === itemId);
  };

  const handlePress = () => {
    const alreadyFavorite = getIdIfAlreadyFavorite(id);
    if (alreadyFavorite) {
      removeProductFromFavorite(id);
      setIsFavourite(false);
    } else {
      addProductToFavorite(id);
      setIsFavourite(true);
    }
  };

  const [isFavourite, setIsFavourite] = useState(false);
  useEffect(() => {
    let favoriteProduct = getIdIfAlreadyFavorite(id);
    if (favoriteProduct) {
      setIsFavourite(true);
    } else {
      setIsFavourite(false);
    }
  }, [favoriteProducts]);

  return (
    <Pressable onPress={handlePress} testID={'FavoriteBar-heartIcon'}>
      {isFavourite ? (
        <View style={styles.shadowContainer}>
          <Octicons
            name="feed-heart"
            size={size}
            color={'red'}
            testID={'FavoriteBar-heartIcon-pressed'}
          />
        </View>
      ) : (
        <AntDesign
          name="heart"
          size={size}
          color={'grey'}
          testID={'FavoriteBar-heartIcon-unpressed'}
        />
      )}
    </Pressable>
  );
};
const styles = StyleSheet.create({
  shadowContainer: {
    borderRadius: 20,
    elevation: 5,
    shadowColor: color.red,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    backgroundColor: 'white',
  },
});

export default FavoriteBar;
