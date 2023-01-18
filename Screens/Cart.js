import React, {useContext, useLayoutEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {color} from "../Styles/Color";
import CartList from "../Components/Cart/CartList";
import CartPrice from "../Components/Cart/CartPrice";

function Cart() {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.detailsContainer}>
                <CartList />
            </View>
            <View style={styles.priceContainer}>
                <CartPrice />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {flex: 1},
    detailsContainer: {
        flex: 9,
        padding: 15,
        backgroundColor: color.greyBackground,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        transform: [{translateY: 25}],
    },
    priceContainer: {
        flex: 2,
        backgroundColor: color.white,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingHorizontal: 8,
        paddingVertical: 1
    },
});

export default Cart;
