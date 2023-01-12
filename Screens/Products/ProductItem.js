import {StyleSheet, Text, View} from "react-native";
import ProductImage from "../../Components/ProductImage";
import { AirbnbRating, Rating } from "react-native-ratings";
import FavoriteBar from "./FavoriteBar";

const ProductItem = ({item}) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.favContainer}>
        <FavoriteBar />
      </View>
      <View style={styles.screen}>
        <ProductImage image={item.image} />
      </View>
      <View style={styles.screen}>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    borderRadius: 20,
    padding: 10,
    backgroundColor: "white",
    margin: 5,
    elevation: 5,
    shadowColor: "grey",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
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
  favContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
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

export default ProductItem;
