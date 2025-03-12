import React, { createContext, useState, useContext, useEffect } from 'react';

const ContextType = {
    products: []
};

const AppContext = createContext(ContextType);

const AppContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('../products.json');
          const jsonData = await response.json();
          setProducts(jsonData);
        };
        
        fetchData();
    }, []);
    

    const saveProductToContext = (product) => {
        setProducts((prevProducts) => [
            ...prevProducts,
            {
                id: products.length,
                name: product.name,
                productType: product.productType,
                colours: product.colours,
                createdOn: product.createdOn,
            }
        ]);
    };
  
    return (
      <AppContext.Provider value={{ products, setProducts, saveProductToContext }}>
        {children}
      </AppContext.Provider>
    );
  };

  export default AppContextProvider;

  export const useAppContext = () => {
    return useContext(AppContext);
  };
