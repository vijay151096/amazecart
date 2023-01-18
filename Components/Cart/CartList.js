import React, {useContext} from 'react';
import {FlatList} from "react-native";
import CartItem from "./CartItem";

const CartList = ({cartProducts}) => {
    return (
        <FlatList data={cartProducts} renderItem={({item}) => <CartItem item={item}/>} />
        )
};

    export default CartList;
