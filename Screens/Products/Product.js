import React from "react";
import ProductList from "./ProductList";
import { Products } from "../../Data/Products";
import { StyleSheet, View } from "react-native";
import Filter from "../../Components/Filter";

const Product = () => {
  return (
    //Filter
    <View style={styles.screen}>
      <View style={styles.filterWrapper}>
        <ProductList items={Products} />
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
