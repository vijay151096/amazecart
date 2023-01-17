import React, {createContext, useState} from 'react';

export const CartContext = createContext({
    cartProducts: [],
    addProductToCart: (id) => {},
    removeProductFromCart: (id) => {},
});

const CartContextProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([]);

    const addProductToCart = (id) => {
        setCartProducts((prevState => {
            return [id, ...prevState]
        }));
    }

    const removeProductFromCart = (id) => {
        setCartProducts((prevState => {
            return prevState.filter(item => item != id);
        }));
    }

    const values = {
        cartProducts: cartProducts,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
    }
    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
