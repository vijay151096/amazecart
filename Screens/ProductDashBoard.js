import React, {useContext, useLayoutEffect, useState} from 'react';
import ProductList from '../Components/ProductList/ProductList';
import {ActivityIndicator, Pressable, StyleSheet, Text, View} from 'react-native';
import Filter from '../Components/ProductList/Filter';
import colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import {color} from '../Styles/Color';
import ProductContext from '../Store/ProductContext';

const ProductDashBoard = ({navigation}) => {
    const [products, setProducts] = useState(null);
    const [categories, setCategories] = useState(null);

    const productCtx = useContext(ProductContext);
    const productsData = productCtx.products;

    useLayoutEffect(() => {
        setProducts(productsData);
        if (categories===null) {
            const getCategory = async () => {
                const response = await fetch(
                    `https://fakestoreapi.com/products/categories`,
                );
                const data = await response.json();
                setCategories(data);
            };
            getCategory();
        }
    }, [productsData]);

    if (!products && !categories) {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <ActivityIndicator size="large" color={color.purple}/>
            </View>
        );
    }

    return (
        <View style={styles.screen}>
            <View style={styles.filterWrapper}>
                {/*<HeaderComponent />*/}
                <Pressable onPress={() => navigation.navigate("cart")}>
                    <Text>cart</Text>
                </Pressable>
                {categories && <Filter items={categories}/>}
                {products && <ProductList items={products}/>}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    productsWrapper: {
        flex: 20,
        backgroundColor: '#eaeaea',
    },
    filterWrapper: {
        flex: 1,
    },
});

export default ProductDashBoard;
