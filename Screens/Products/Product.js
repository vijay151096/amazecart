import React, { useLayoutEffect, useState } from "react";
import ProductList from "./ProductList";
import { Products } from "../../Data/Products";
import { StyleSheet, View } from "react-native";
import Filter from "../../Components/Filter";
import HeaderComponent from "../../Components/HeaderComponent";

const Product = () => {

  const [products, setProducts] = useState(null);

  useLayoutEffect(() => {
    const getData = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    getData();
  });

  return (
    <View style={styles.screen}>
      <View style={styles.filterWrapper}>
        { products && <Filter items={products} /> }
        { products && <ProductList items={products} /> }
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
    backgroundColor: "#eaeaea",
  },
  filterWrapper: {
    flex: 1,
  },
});

export default Product;
