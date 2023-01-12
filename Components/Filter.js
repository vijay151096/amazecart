import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ShadowComponent from "./ShadowComponent";

const displayFilter = ({item}) => {
  return (
    <ShadowComponent>
      <View style={styles.filterItem}>
        <Text>{item.category}</Text>
      </View>
    </ShadowComponent>
  );
};

const Filter = ({items}) => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.title}>Our Products </Text>
      <FlatList data={items} renderItem={displayFilter} horizontal={true} keyExtractor={ (item,index) => index}/>
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    margin: 10,
  },
  filterItem:{
    padding: 10,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
  },
  title:{
    fontWeight: "bold",
    fontSize: 14
  }
});

export default Filter;
