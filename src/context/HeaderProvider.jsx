import React, { useState, createContext, useContext } from "react";

export const HeaderContext = createContext();

export const useHeaderContext = () => {
  return useContext(HeaderContext);
};

function HeaderProvider({ children }) {
  const [currentPage, setCurrentPage] = useState("/");

  return (
    <HeaderContext.Provider
      value={{
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
}

export default HeaderProvider;
