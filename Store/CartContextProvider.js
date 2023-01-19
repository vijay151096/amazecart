import React, {createContext, useState} from 'react';

export const CartContext = createContext({
  cartProducts: [],
  addProductToCart: id => {},
  removeProductFromCart: id => {},
  updateProductInCart: (id, quantity) => {},
  clearCart: () => {},
});

const CartContextProvider = ({children}) => {
  const [cartProducts, setCartProducts] = useState([{id: 10, quantity: 1}]);

  const addProductToCart = id => {
    const productAlreadyAdded = cartProducts.find(item => item.id === id);
    if (!productAlreadyAdded) {
      setCartProducts(prevState => {
        return [{id: id, quantity: 1}, ...prevState];
      });
    } else {
      updateProductInCart(id, productAlreadyAdded.quantity + 1);
    }
  };

  const removeProductFromCart = id => {
    setCartProducts(prevState => {
      return prevState.filter(item => item.id != id);
    });
  };

  const clearCart = () => {
    setCartProducts([]);
  };

  const updateProductInCart = (prodId, quantity) => {
    setCartProducts(prevState => {
      return prevState.map(item => {
        if (item.id === prodId) {
          if (quantity === 0) {
            removeProductFromCart(prodId);
          }
          item.quantity = quantity;
        }
        return item;
      });
    });
  };

  const values = {
    cartProducts: cartProducts,
    addProductToCart: addProductToCart,
    removeProductFromCart: removeProductFromCart,
    updateProductInCart: updateProductInCart,
    clearCart: clearCart,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
