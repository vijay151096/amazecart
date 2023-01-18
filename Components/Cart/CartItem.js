import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from "react-native";
import ProductImage from "../ProductList/ProductImage";
import ProductDescription from "../ProductList/ProductDescription";
import {color} from "../../Styles/Color";
import Entypo from "react-native-vector-icons/Entypo";

const CartItem = ({item}) => {

    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity( prevState => prevState + 1 );
    }

    const decreaseQuantity = () => {
        setQuantity( prevState =>  {
           return prevState > 0 ? prevState - 1 : 0 ;
        });
    }

    return (
        <View style={styles.screen}>
            <View style={styles.imageContainer}>
            <ProductImage
                image={item.image}
                innerContainerStyle={styles.innerContainerStyle}
                imageStyle={styles.imageStyle}
            />
            </View>
            <View style={styles.descContainer}>
            <ProductDescription item={item} />
            </View>
            <View style={styles.quantityContainer}>
                <Pressable onPress={decreaseQuantity}>
                    <View style={[styles.shadowContainer,styles.minus]}>
                        <Entypo
                            style={styles.star}
                            name="minus"
                            size={20}
                            color={color.black}
                        />
                    </View>
                </Pressable>
                <View>
                    <Text style={styles.quantity}>{quantity}</Text>
                </View>
                <Pressable onPress={increaseQuantity}>
                    <View style={[styles.shadowContainer, styles.plus]}>
                        <Entypo
                            style={styles.star}
                            name="plus"
                            size={20}
                            color={color.black}
                        />
                    </View>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: color.white,
        borderRadius: 20,
        justifyContent: "space-between",
        padding: 5,
        marginVertical: 5,
    },
    imageContainer: {
        alignItems: "center"
    },
    descContainer: {
        flex: 3,
        alignItems: "flex-start",
        justifyContent: "center",
    },
    quantityContainer: {
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    innerContainerStyle: {
        padding: 5,
    },
    imageStyle: {
        height: 50,
        width: 50,
    },
    plus: {
        backgroundColor: color.lightBlue,
        padding: 5,
        borderRadius: 20,
    },
    minus: {
        backgroundColor: color.white,
        padding: 5,
        borderRadius: 20,
    },
    quantity: {
        fontWeight: "bold",
        fontSize: 16
    },
    shadowContainer:{
        borderRadius: 20,
        elevation: 5,
        shadowColor: color.lightGrey,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 5,
        backgroundColor: 'white',
    },
})

export default CartItem;
