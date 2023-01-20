import {FlatList, Image, StyleSheet, View} from 'react-native';
import ProductItem from './ProductItem';

const singleItemComponent = ({item}) => {
  return <ProductItem item={item} />;
};

const ProductList = ({items}) => {
  return (
    <View
      style={[styles.screen, styles.outerContainer]}
      testID={'ProductList-outer'}>
      <FlatList
        data={items}
        renderItem={singleItemComponent}
        numColumns={2}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  outerContainer: {
    borderColor: 'grey',
    padding: 10,
  },
});
export default ProductList;
