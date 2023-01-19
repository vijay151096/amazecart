import React, {useContext, useEffect, useState} from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import ShadowComponent from '../Core/ShadowComponent';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ProductContext} from '../../Store/ProductContextProvider';

const displayFilter = item => {
  const productItem = item.item;
  const handlePress = () => {
    productItem.setSelectedFilter(prevFilter =>
      prevFilter === productItem.value ? null : productItem.value,
    );
  };
  return (
    <Pressable
      style={[
        styles.filterItem,
        productItem.value === productItem.selectedFilter
          ? styles.pressedStyle
          : null,
      ]}
      onPress={handlePress}>
      <View>
        <Text>{productItem.value}</Text>
      </View>
    </Pressable>
  );
};

const Filter = ({items}) => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const productCtx = useContext(ProductContext);

  let transformedItems = [];
  for (const item of items) {
    transformedItems.push({value: item, selectedFilter, setSelectedFilter});
  }

  useEffect(() => {
    const getAllProducts = async () => {
      await productCtx.initializeProducts();
    };
    if (selectedFilter === null) {
      getAllProducts();
    } else {
      productCtx.getFilteredProducts(selectedFilter);
    }
  }, [selectedFilter]);

  return (
    <View style={styles.filterContainer}>
      <Text style={styles.title}>Our Products </Text>
      <FlatList
        data={transformedItems}
        renderItem={displayFilter}
        horizontal={true}
        keyExtractor={(item, index) => index}
        showsHorizontalScrollIndicator={false}
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
  pressedStyle: {
    elevation: 5,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});

export default Filter;
