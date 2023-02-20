import {StyleSheet, Text, View} from 'react-native';
import useTheme from '../../Store/Hooks/useTheme';

const PromotionLabel = ({style}) => {
  const {themeColors} = useTheme();
  return (
    <View
      style={[
        styles.promotionContainer,
        {backgroundColor: themeColors.lightBlue},
        style,
      ]}>
      <Text style={styles.offerCent}> 30% </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  promotionContainer: {
    padding: 3,
    borderRadius: 4,

    alignItems: 'center',
    justifyContent: 'center',
  },
  offerCent: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default PromotionLabel;
