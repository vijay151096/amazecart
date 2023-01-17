import {Pressable, StyleSheet, Text, View} from 'react-native';
import {AirbnbRating, Rating} from 'react-native-ratings';
import FavoriteBar from './FavoriteBar';
import ProductDetails from './ProductDetails';
import ShadowComponent from '../Core/ShadowComponent';
import ProductImage from './ProductImage';
import {useNavigation} from '@react-navigation/native';

const ProductItem = ({item}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('productDetails');
  };

  return (
    <ShadowComponent style={styles.outerContainer}>
      <Pressable onPress={handlePress}>
        <View style={styles.favContainer}>
          <FavoriteBar />
        </View>
        <View style={styles.screen}>
          <ProductImage image={item.image} />
        </View>
        <View style={styles.screen}>
          <ProductDetails item={item} />
        </View>
      </Pressable>
    </ShadowComponent>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    borderRadius: 20,
    padding: 10,
    backgroundColor: 'white',
    margin: 5,
  },
  detailText: {
    color: '#460178',
    fontSize: 14,
    padding: 5,
  },
  detailPrice: {
    color: '#460178',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
  },
  detailRate: {
    fontSize: 12,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  favContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rating: {
    fontSize: 10,
  },
  detailContainer: {
    flex: 4,
    alignItems: 'center',
  },
  screen: {
    flex: 1,
  },
});

export default ProductItem;
