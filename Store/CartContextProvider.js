import React, {createContext, useState} from 'react';

export const CartContext = createContext({
  cartProducts: [],
  addProductToCart: id => {},
  removeProductFromCart: id => {},
  updateProductInCart: (id, quantity) => {},
});

const CartContextProvider = ({children}) => {
  const [cartProducts, setCartProducts] = useState([
    {id: 10, quantity: 1},
    // {id: 11, quantity: 2},
    // {id: 12, quantity: 3},
  ]);

  const addProductToCart = id => {
    setCartProducts(prevState => {
      return [{id: id, quantity: 1}, ...prevState];
    });
  };

  const removeProductFromCart = id => {
    setCartProducts(prevState => {
      return prevState.filter(item => item.id != id);
    });
  };

  const updateProductInCart = (id, quantity) => {
    let updatedList = [];
    for (let index in cartProducts) {
      let singleItem = {};
      let item = cartProducts[index];
      singleItem.id = item.id;
      singleItem.quantity = item.quantity;
      if (item.id === id) {
        singleItem.quantity = quantity;
      }
      updatedList.push(singleItem);
    }
    setCartProducts(updatedList);
  };

  const values = {
    cartProducts: cartProducts,
    addProductToCart: addProductToCart,
    removeProductFromCart: removeProductFromCart,
    updateProductInCart: updateProductInCart,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
