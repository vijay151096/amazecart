import { StyleSheet, Text, View } from "react-native";

const PromotionLabel = () => {
  return (
    <View style={styles.promotionContainer}>
      <Text style={styles.offerCent}> 30% </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  promotionContainer: {
    padding: 2,
    borderRadius:4,
    backgroundColor: "#85C1E9",
    alignItems:"center",
    justifyContent:"center"
  },
  offerCent: {
    fontSize: 12,
    fontWeight: "bold"
  }
});


export default PromotionLabel;
