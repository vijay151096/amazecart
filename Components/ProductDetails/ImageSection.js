import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PromotionLabel from '../Core/PromotionLabel';
import ProductImage from '../ProductList/ProductImage';

function ImageSection({image}) {
  return (
    <View style={styles.imageOuterContainer}>
      <View style={styles.marginLabel}>
        <PromotionLabel style={styles.labelPadding} />
      </View>
      <View style={styles.marginImage}>
        <ProductImage
          image={image}
          innerContainerStyle={styles.innerContainerStyle}
          imageStyle={styles.imageStyle}
        />
      </View>
      <View>
        <Text>-----</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageOuterContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  marginImage: {
    marginVertical: 20,
  },
  marginLabel: {
    marginTop: 35,
  },
  innerContainerStyle: {
    padding: 14,
  },
  imageStyle: {
    height: 150,
    width: 150,
  },

  labelPadding: {
    padding: 5,
  },
});

export default ImageSection;
