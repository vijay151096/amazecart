import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AirbnbRating } from "react-native-ratings";

const ProductDetails = ({item}) => {
  return (
    <View style={styles.detailContainer}>
      <Text style={styles.detailText}>{item.title}</Text>
      <Text style={styles.detailPrice}> $ {item.price}</Text>
      <View style={styles.detailRate}>
        <AirbnbRating
          count={5}
          defaultRating={item.rating.rate}
          size={15}
          showRating={false}
        />
        <Text style={styles.rating}>({item.rating.rate})</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailText: {
    color: "#460178",
    fontSize: 14,
    padding: 5,
  },
  detailPrice: {
    color: "#460178",
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
  },
  detailRate: {
    fontSize: 12,
    padding: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  rating:{
    fontSize: 10,
  },
  detailContainer: {
    flex: 4,
    alignItems: "center"
  },
  screen: {
    flex: 1,
  },
});

export default ProductDetails;
