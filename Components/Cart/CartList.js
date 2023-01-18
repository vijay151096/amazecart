import React, {useContext} from 'react';
import {CartContext} from "../../Store/CartContextProvider";
import {FlatList} from "react-native";
import CartItem from "./CartItem";

const CartList = () => {

    const {cartProducts} = useContext(CartContext);
    return (
        <FlatList data={cartProducts} renderItem={({item}) => <CartItem id={item}/>} />
        )
};

    export default CartList;
