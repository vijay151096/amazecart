import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PromotionLabel from '../Core/PromotionLabel';
import ProductImage from '../ProductList/ProductImage';
import Octicons from "react-native-vector-icons/Octicons";
import {color} from "../../Styles/Color";
import Entypo from "react-native-vector-icons/Entypo";

function ImageSection({image}) {
  return (
    <View style={styles.imageOuterContainer}>
      <View style={styles.marginLabel}>
        <PromotionLabel style={styles.labelPadding} />
      </View>
      <View style={styles.marginImage}>
        <View style={[styles.rippleStyle, {padding: 20}]}>
        <View style={styles.rippleStyle}>
        <ProductImage
          image={image}
          innerContainerStyle={styles.innerContainerStyle}
          imageStyle={styles.imageStyle}
        />
        </View>
        </View>
      </View>
      <View style={styles.iconsStyling}>
        <Entypo name={"dot-single"} size={30} color={color.lightBlue}/>
        <Entypo name={"dot-single"} size={30} color={color.lightBlue}/>
        <Octicons name={"dash"} size={50} color={color.lightBlue}/>
        <Entypo name={"dot-single"} size={30} color={color.lightBlue}/>
        <Entypo name={"dot-single"} size={30} color={color.lightBlue}/>
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
  rippleStyle:{
    padding: 10,
    borderRadius: 200,
    borderLeftWidth: 0.3,
    borderRightWidth: 0.3,
    borderColor: color.gold
  },
  marginImage: {
    marginVertical: 15,
    flex: 10,
  },
  iconsStyling: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  marginLabel: {
    flex: 1,
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
