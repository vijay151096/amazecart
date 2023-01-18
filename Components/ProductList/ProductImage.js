import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const ProductImage = ({
  image,
  innerContainerStyle,
  imageStyle,
  outerContainerStyle,
}) => {
  return (
    <View style={[styles.imageContainer, outerContainerStyle]}>
      <View style={styles.imageOuterContainer}>
        <View style={[styles.imageInnerContainer, innerContainerStyle]}>
          <Image style={[styles.image, imageStyle]} source={{uri: image}} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    padding: 15,
    alignItems: 'center',
  },
  imageOuterContainer: {
    padding: 10,
    backgroundColor: '#FFA07A',
    borderRadius: 1000,
  },
  imageInnerContainer: {
    padding: 5,
    borderWidth: 2,
    borderColor: '#FF5733',
    borderRadius: 1000,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default ProductImage;
