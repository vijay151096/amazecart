import React from 'react';
const ProductContext = React.createContext({
  products: [],
  initializeProducts: async () => {},
  getProduct: id => {},
  getFilteredProducts: category => {},
});

export default ProductContext;
