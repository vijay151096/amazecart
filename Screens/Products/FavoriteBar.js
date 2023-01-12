import { Image, StyleSheet, Text, View } from "react-native";
import PromotionLabel from "../../Components/PromotionLabel";

const FavoriteBar = () => {
  return (
    <View style={styles.favOuterContainer}>
      <PromotionLabel />
      <Image style={styles.image} source={require("../../Assets/Icons/favorite.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  favOuterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    height: 25
  },
  image: {
    width: 20,
    height: 20,
  },
});

export default FavoriteBar;
