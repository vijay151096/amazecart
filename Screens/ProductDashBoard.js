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
import {lightColor} from '../Styles/LightColor';

import {FavoriteContext} from '../Store/FavoriteContextProvider';
import Entypo from 'react-native-vector-icons/Entypo';
import {CartContext} from '../Store/CartContextProvider';
import AppLoading from '../Components/Core/AppLoading';
import {ProductContext} from '../Store/ProductContextProvider';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LogoutIcon from '../Components/Core/LogoutIcon';
import {FAKE_STORE_CATEGORIES_URL} from '@env';
import {ThemeContext} from '../Store/ThemeContextProvider';
import DarkLightTheme from '../Components/Core/DarkLightTheme';

const ProductDashBoard = ({navigation}) => {
  const {width} = Dimensions.get('window');

  const {cartProducts} = useContext(CartContext);
  const {themeColors} = useContext(ThemeContext);

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
      headerRight: () => (
        <View style={{flex: 1, flexDirection: 'row'}}>
          <DarkLightTheme />
          <LogoutIcon style={{marginRight: 10}} />
        </View>
      ),
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
          {
            backgroundColor: themeColors.purple,
          },
          {left: width * 0.425},
          pressed && {opacity: 0.8},
        ]}>
        <Entypo
          name={'shopping-cart'}
          size={24}
          color={themeColors.lightBlue}
        />
        {cartProducts.length > 0 && (
          <View
            style={[
              styles.itemCount,
              {
                backgroundColor: themeColors.pink,
                borderColor: lightColor.white,
              },
            ]}>
            <Text
              style={[
                styles.itemCountText,
                {
                  color: themeColors.white,
                },
              ]}>
              {cartProducts.length}
            </Text>
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
    fontWeight: 'bold',
  },
  itemCount: {
    position: 'absolute',
    height: 22,
    width: 22,
    borderWidth: 1,
    borderRadius: 25,

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
