/* eslint-disable react/prop-types */
// src/context/ProductsContext.js
import { createContext, useState } from 'react';

// Context'i oluştur
export const ProductsContext = createContext();

// Provider bileşenini oluştur
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
