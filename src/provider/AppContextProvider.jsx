import React, { createContext, useState } from 'react';
import jsonData from '../products.json';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [products, setProducts] = useState(jsonData.products);
  
    return (
      <AppContext.Provider value={{ products, setProducts }}>
        {children}
      </AppContext.Provider>
    );
  };

  export { AppContext, AppContextProvider };
