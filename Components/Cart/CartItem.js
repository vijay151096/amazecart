import React, {useContext} from 'react';
import ProductContext from "../../Store/ProductContext";
import {Text, View} from "react-native";

const CartItem = ({id}) => {

    const {getProduct} = useContext(ProductContext);
    const productDetails = getProduct(id);
    return (
        <View>
            <Text>{productDetails.title}</Text>
        </View>
    );
};

export default CartItem;
