import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';

const HeaderComponent = () => {
  return (
    <View style={styles.outerContainer}>
      <MaterialCommunityIcons name={'dots-grid'} size={30} />
      <View style={styles.innerContainer}>
        <Text style={[styles.heading, styles.x]}>X</Text>
        <Text style={[styles.heading, styles.e]}>E</Text>
      </View>
      <Octicons name={'search'} size={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'Georgia',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  x: {
    color: '#9B59B6',
  },
  e: {
    color: '#AED6F1',
  },
});
export default HeaderComponent;
