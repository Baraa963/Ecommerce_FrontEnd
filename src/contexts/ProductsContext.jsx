/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

// Create a Context for products
const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);

// Create a Provider to share products state
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
