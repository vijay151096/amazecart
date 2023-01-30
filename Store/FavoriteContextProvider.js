import React, {createContext, useState} from 'react';

export const FavoriteContext = createContext({
  favoriteProducts: [],
  addProductToFavorite: id => {},
  removeProductFromFavorite: id => {},
});

const FavoriteContextProvider = ({children}) => {
  const [favoriteProducts, setFavoriteProducts] = useState([1, 2, 3, 5]);

  const addProductToFavorite = id => {
    setFavoriteProducts(prevState => {
      return [id, ...prevState];
    });
  };

  const removeProductFromFavorite = id => {
    setFavoriteProducts(prevState => {
      return prevState.filter(item => item !== id);
    });
  };

  const values = {
    favoriteProducts: favoriteProducts,
    addProductToFavorite: addProductToFavorite,
    removeProductFromFavorite: removeProductFromFavorite,
  };
  return (
    <FavoriteContext.Provider value={values}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
