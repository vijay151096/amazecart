import {Pressable, StyleSheet, View} from 'react-native';
import {useContext, useState, useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import {FavoriteContext} from '../../Store/FavoriteContextProvider';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import useTheme from '../../Store/Hooks/useTheme';

const FavoriteBar = ({item, size}) => {
  const {addProductToFavorite, removeProductFromFavorite, favoriteProducts} =
    useContext(FavoriteContext);
  const {id} = item;
  const {themeColors} = useTheme();
  const getIdIfAlreadyFavorite = itemId => {
    return favoriteProducts.find(productId => productId === itemId);
  };
  const opacityValue = useSharedValue(1);
  const scaleValue = useSharedValue(1);

  const opacityChange = useAnimatedStyle(() => {
    return {
      opacity: opacityValue.value,
      transform: [{scale: scaleValue.value}],
    };
  });

  const handlePress = () => {
    const alreadyFavorite = getIdIfAlreadyFavorite(id);
    if (alreadyFavorite) {
      removeProductFromFavorite(id);
      setIsFavourite(false);
    } else {
      addProductToFavorite(id);
      setIsFavourite(true);
    }
    handleAnimation();
  };

  const [isFavourite, setIsFavourite] = useState(false);

  const handleAnimation = () => {
    opacityValue.value = withTiming(0, {duration: 0});
    opacityValue.value = withTiming(1, {duration: 250});
    if (!isFavourite) {
      scaleValue.value = withTiming(1.2, {duration: 250});
      setTimeout(() => {
        scaleValue.value = withTiming(1, {duration: 100});
      }, 251);
    }
  };

  useEffect(() => {
    let favoriteProduct = getIdIfAlreadyFavorite(id);
    if (favoriteProduct) {
      setIsFavourite(true);
    } else {
      setIsFavourite(false);
    }
    // handleAnimation();
  }, [favoriteProducts]);

  return (
    <Animated.View style={opacityChange}>
      <Pressable onPress={handlePress} testID={'FavoriteBar-heartIcon'}>
        {isFavourite ? (
          <View
            style={[styles.shadowContainer, {shadowColor: themeColors.red}]}>
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
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  shadowContainer: {
    borderRadius: 20,
    elevation: 5,

    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    backgroundColor: 'white',
  },
});

export default FavoriteBar;
