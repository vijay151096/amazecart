import {StyleSheet, Text, View} from 'react-native';
import {color} from "../../Styles/Color";

const PromotionLabel = ({style}) => {
  return (
    <View style={[styles.promotionContainer, style]}>
      <Text style={styles.offerCent}> 30% </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  promotionContainer: {
    padding: 3,
    borderRadius: 4,
    backgroundColor: color.lightBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  offerCent: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default PromotionLabel;
