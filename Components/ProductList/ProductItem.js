import {Pressable, StyleSheet, Text, View} from 'react-native';
import FavoriteBar from './FavoriteBar';
import ProductDetails from './ProductDetails';
import ShadowComponent from '../Core/ShadowComponent';
import ProductImage from './ProductImage';
import {useNavigation} from '@react-navigation/native';
import PromotionLabel from '../Core/PromotionLabel';

const ProductItem = ({item}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('productDetails', {item: item});
  };

  return (
    <ShadowComponent style={styles.outerContainer}>
      <Pressable onPress={handlePress} testID={'ProductItem-OuterContainer'}>
        <View style={styles.favContainer} testID={'ProductItem-favBar'}>
          <View style={styles.favOuterContainer}>
            <PromotionLabel />
            <FavoriteBar item={item} size={20} />
          </View>
        </View>
        <View style={styles.screen} testID={'ProductItem-image'}>
          <ProductImage image={item.image} />
        </View>
        <View style={styles.screen} testID={'ProductItem-details'}>
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
  favOuterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    height: 25,
  },
});

export default ProductItem;
