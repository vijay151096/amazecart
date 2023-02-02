import React, {useContext, useEffect, useLayoutEffect, useState} from 'react';
import ProductList from '../Components/ProductList/ProductList';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import Filter from '../Components/ProductList/Filter';
import colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import {color} from '../Styles/Color';

import {FavoriteContext} from '../Store/FavoriteContextProvider';
import Entypo from 'react-native-vector-icons/Entypo';
import {CartContext} from '../Store/CartContextProvider';
import AppLoading from '../Components/Core/AppLoading';
import {ProductContext} from '../Store/ProductContextProvider';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LogoutIcon from '../Components/Core/LogoutIcon';
import {FAKE_STORE_CATEGORIES_URL} from '@env';

const ProductDashBoard = ({navigation}) => {
  const {width} = Dimensions.get('window');

  const {cartProducts} = useContext(CartContext);

  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);

  const {favoriteProducts} = useContext(FavoriteContext);
  const productCtx = useContext(ProductContext);
  const productsData = productCtx.products;

  const handleDrawerState = () => {
    navigation.openDrawer();
  };

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MaterialCommunityIcons
          name={'dots-grid'}
          size={30}
          style={{marginLeft: 10}}
          onPress={handleDrawerState}
        />
      ),
      headerRight: () => <LogoutIcon style={{marginRight: 10}} />,
    });
  }, []);

  useLayoutEffect(() => {
    setProducts(productsData);
    if (categories === null) {
      const getCategory = async () => {
        const response = await fetch(FAKE_STORE_CATEGORIES_URL);
        const data = await response.json();
        setCategories(data);
      };
      getCategory();
    }
  }, [productsData, favoriteProducts]);

  if (!products && !categories) {
    return <AppLoading />;
  }

  return (
    <View style={styles.screen}>
      {/*<HeaderComponent />*/}

      {categories && <Filter items={categories} />}
      <ProductList items={products} />

      <Pressable
        onPress={() => navigation.navigate('cart')}
        style={({pressed}) => [
          styles.cartButton,
          {left: width * 0.425},
          pressed && {opacity: 0.8},
        ]}>
        <Entypo name={'shopping-cart'} size={24} color={color.lightBlue} />
        {cartProducts.length > 0 && (
          <View style={styles.itemCount}>
            <Text style={styles.itemCountText}>{cartProducts.length}</Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  cartButton: {
    position: 'absolute',
    borderRadius: 45,
    height: 65,
    width: 65,
    backgroundColor: color.purple,
    bottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  itemCountText: {
    color: color.white,
    fontWeight: 'bold',
  },
  itemCount: {
    position: 'absolute',
    height: 22,
    width: 22,
    borderWidth: 1,
    borderColor: color.white,
    borderRadius: 25,
    backgroundColor: color.pink,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
  },
  screen: {
    flex: 1,
  },
  productsWrapper: {
    flex: 20,
    backgroundColor: '#eaeaea',
  },
  filterWrapper: {
    flex: 1,
  },
});

export default ProductDashBoard;
