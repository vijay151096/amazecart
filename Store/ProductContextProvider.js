import React, {useEffect, useState} from 'react';
import ProductContext from './ProductContext';

function ProductContextProvider({children}) {
  const [initialProducts, setInitialProducts] = useState(null);

  const [products, setProducts] = useState(null);

  useEffect(() => {
    initializeProducts();
  }, []);

  const initializeProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
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
