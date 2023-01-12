import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const displayFilter = ({item}) => {
  return <Text>{item.category}</Text>;
};

const Filter = ({items}) => {
  return (
    <View>
      <Text>Our Products </Text>
      <FlatList data={items} renderItem={displayFilter} horizontal={true}/>
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
  },
});

export default Filter;
