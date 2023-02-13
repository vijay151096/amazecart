import React, {useContext} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {StyleSheet, Text, View} from 'react-native';
import {lightColor} from '../../Styles/LightColor';
import {ThemeContext} from '../../Store/ThemeContextProvider';

function DetailTitle({title, description, rating}) {
  const {themeColors} = useContext(ThemeContext);
  return (
    <View testID="DetailTitle-mainContainer">
      <View style={styles.rowFlexContainer} testID="DetailTitle-innerContainer">
        <Text
          style={[styles.mainTitle, {color: themeColors.purple}]}
          testID="DetailTitle-title">
          {title}
        </Text>
        <View style={styles.ratingContainer}>
          <Entypo
            style={styles.star}
            name="star"
            size={20}
            color={themeColors.gold}
          />
          <Text
            style={{color: themeColors.lightGrey}}
            testID="DetailTitle-rating">
            ({rating})
          </Text>
        </View>
      </View>
      <Text
        style={{color: themeColors.purple}}
        testID="DetailTitle-description">
        {description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainTitle: {
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
});

export default DetailTitle;
