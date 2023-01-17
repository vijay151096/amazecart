import React, {useLayoutEffect, useState} from 'react';
import ProductList from '../Components/ProductList/ProductList';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import Filter from '../Components/ProductList/Filter';
import colors from "react-native/Libraries/NewAppScreen/components/Colors";
import {color} from "../Styles/Color";

const ProductDashBoard = () => {
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);

  useLayoutEffect(() => {
    const FAKESTORE_API = 'https://fakestoreapi.com/products'
    const getData = async () => {
      const response = await fetch(FAKESTORE_API);
      const data = await response.json();
      setProducts(data);
    };
    const getCategory = async () => {
      const response = await fetch(`${FAKESTORE_API}/categories`);
      const data = await response.json();
      setCategories(data);
    };
    getData();
    getCategory();
  },[]);

  if(!products && !categories){
    return <View style={{alignItems: "center", justifyContent: "center", flex: 1}}><ActivityIndicator size="large" color={color.purple}/></View>;
  }

  return (
    <View style={styles.screen}>
      <View style={styles.filterWrapper}>
        {/*<HeaderComponent />*/}
        {categories && <Filter items={categories} />}
        {products && <ProductList items={products} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
