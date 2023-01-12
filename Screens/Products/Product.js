import React from "react";
import ProductList from "./ProductList";
import { Products } from "../../Data/Products";
import { StyleSheet, View } from "react-native";

const Product = () => {
  return (
    //Filter
    <View style={styles.productsWrapper}>
    <ProductList items={Products} />
    </View>
  );
};

const styles = StyleSheet.create({
  productsWrapper: {
    flex: 1,
    backgroundColor: "#eaeaea",
  },
});

export default Product;
