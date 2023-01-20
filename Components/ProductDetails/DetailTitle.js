import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {StyleSheet, Text, View} from 'react-native';
import {color} from '../../Styles/Color';

function DetailTitle({title, description, rating}) {
  return (
    <View testID="DetailTitle-mainContainer">
      <View style={styles.rowFlexContainer} testID="DetailTitle-innerContainer">
        <Text style={styles.mainTitle} testID="DetailTitle-title">
          {title}
        </Text>
        <View style={styles.ratingContainer}>
          <Entypo
            style={styles.star}
            name="star"
            size={20}
            color={color.gold}
          />
          <Text style={styles.ratingText} testID="DetailTitle-rating">
            ({rating})
          </Text>
        </View>
      </View>
      <Text style={styles.description} testID="DetailTitle-description">
        {description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainTitle: {
    color: color.purple,
    fontWeight: 'bold',
    fontSize: 27,
  },
  star: {
    marginRight: 4,
  },
  rowFlexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: color.lightGrey,
  },
  description: {
    color: color.purple,
  },
});

export default DetailTitle;
