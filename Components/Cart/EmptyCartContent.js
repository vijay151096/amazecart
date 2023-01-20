import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {color} from '../../Styles/Color';
import Entypo from 'react-native-vector-icons/Entypo';

const EmptyCartContent = () => {
  return (
    <View style={styles.outerContainer} testID={'EmptyCartContainer-EmptyPage'}>
      <Entypo name={'shopping-cart'} size={24} color="#B2BABB" />
      <Text style={styles.innerText} testID={'EmptyCartContainer-EmptyText'}>
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
    color: '#B2BABB',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default EmptyCartContent;
