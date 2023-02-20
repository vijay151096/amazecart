import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import useTheme from '../../Store/Hooks/useTheme';

const EmptyCartContent = () => {
  const {themeColors} = useTheme();

  return (
    <View style={styles.outerContainer} testID={'EmptyCartContainer-EmptyPage'}>
      <Entypo name={'shopping-cart'} size={24} color={themeColors.cartGrey} />
      <Text
        style={[styles.innerText, {color: themeColors.cartGrey}]}
        testID={'EmptyCartContainer-EmptyText'}>
        Cart is Empty
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 50,
    alignItems: 'center',
    transform: [{translateY: -25}],
  },

  innerText: {
    fontSize: 24,
    //color: '#B2BABB',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default EmptyCartContent;
