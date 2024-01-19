import React, { createContext, useState } from "react";

export const ContextFilter = createContext();

export const ContextFilterProvider = ({ children }) => {
  const [filterproduct, setFilterProduct] = useState({
    category: "all",
    minPrice: 7.95,
  });


  

  return (
    <ContextFilter.Provider value={{ filterproduct, setFilterProduct }}>
      {children}
    </ContextFilter.Provider>
  );
};

export default ContextFilter;
