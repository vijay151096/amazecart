import React from "react";
import {Image, StyleSheet, View} from "react-native";

const ProductImage = ({image}) => {
  return (
    <View style={styles.imageContainer}>
      <View style={styles.imageOuterContainer}>
        <View style={styles.imageInnerContainer}>
          <Image style={styles.image} source={{uri: image}} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    flex: 4,
    padding: 15,
    alignItems: "center",
  },
  imageOuterContainer: {
    padding: 10,
    backgroundColor: "#FFA07A",
    borderRadius: 1000,
  },
  imageInnerContainer: {
    padding: 5,
    borderWidth: 2,
    borderColor: "#FF5733",
    borderRadius: 1000,
    backgroundColor: "white",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default ProductImage;
