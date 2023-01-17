import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {color} from "../../Styles/Color"
import Entypo from "react-native-vector-icons/Entypo";
const PriceSection = ({item}) => {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.innerPriceContainer}>
                <View><Text style={styles.currencyText}>$</Text></View>
                <View><Text style={styles.priceText}>{item.price}</Text></View>
            </View>
            <View style={styles.addToCartContainer}>
                <Entypo name={"shopping-cart"} size={24} color={color.purple} />
                <Text style={styles.addToCartText}>Add To Cart</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 20
    },
    innerPriceContainer: {
        flexDirection: "row",
        alignItems: "flex-start",
    },
    addToCartContainer: {
        flexDirection: "row",
        paddingVertical: 15,
        paddingHorizontal: 17,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: color.greyBackground,
    },
    addToCartText:{
        fontSize: 16,
        fontWeight: "bold",
        color: color.purple,
        paddingLeft: 10,
    },
    currencyText: {
        fontSize: 15,
        paddingTop: 8,
        fontWeight: "900",
        alignSelf: "flex-start"
    },
    priceText: {
        fontSize: 40,
    }
})

export default PriceSection;
