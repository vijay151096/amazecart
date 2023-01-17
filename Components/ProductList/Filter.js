import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ShadowComponent from '../Core/ShadowComponent';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const displayFilter = ({item}) => {
  return (
    <View style={styles.filterItem}>
      <Text>{item}</Text>
    </View>
  );
};

const Filter = ({items}) => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.title}>Our Products </Text>
      <FlatList
        data={items}
        renderItem={displayFilter}
        horizontal={true}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    margin: 10,
  },
  filterItem: {
    padding: 13,
    backgroundColor: 'white',
    marginVertical: 4,
    marginHorizontal: 7,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 10,
  },
});

export default Filter;
