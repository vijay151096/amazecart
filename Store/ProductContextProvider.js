import React, {useEffect, useState} from 'react';
import Config from 'react-native-config';

export const ProductContext = React.createContext({
  products: [],
  initializeProducts: async () => {},
  getProduct: id => {},
  getFilteredProducts: category => {},
});

function ProductContextProvider({children}) {
  const {FAKE_STORE_PRODUCTS_URL} = Config;
  const [initialProducts, setInitialProducts] = useState(null);

  const [products, setProducts] = useState(null);

  useEffect(() => {
    initializeProducts();
  }, []);

  const initializeProducts = async () => {
    const response = await fetch(FAKE_STORE_PRODUCTS_URL);
    const data = await response.json();
    setInitialProducts(data);
    setProducts(data);
  };

  const getProduct = id => {
    const requiredProduct = initialProducts.find(product => product.id === id);
    return requiredProduct;
  };

  const getFilteredProducts = category => {
    const filteredProducts = initialProducts.filter(
      product => product.category === category,
    );
    setProducts(filteredProducts);
  };

  return (
    <ProductContext.Provider
      value={{products, initializeProducts, getProduct, getFilteredProducts}}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
