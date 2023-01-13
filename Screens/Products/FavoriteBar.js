import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';
import PromotionLabel from '../../Components/PromotionLabel';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';

const FavoriteBar = () => {
  const handlePress = () => {
    setIsFavourite(prevState => !prevState);
  };

  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <View style={styles.favOuterContainer}>
      <PromotionLabel />
      {/*<Image
        style={styles.image}
        source={require('../../Assets/Icons/favorite.png')}
  />*/}

      <Pressable onPress={handlePress}>
        {isFavourite ? (
          <Octicons name="feed-heart" size={20} color={'red'} />
        ) : (
          <AntDesign name="heart" size={20} color={'grey'} />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  favOuterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    height: 25,
  },
  image: {
    width: 20,
    height: 20,
  },
});

export default FavoriteBar;
