import React, { useState, createContext, useContext, useEffect } from "react";

export const HeaderContext = createContext();

export const useHeaderContext = () => {
  return useContext(HeaderContext);
};

function HeaderProvider({ children }) {
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    handlePageLoad();
  }, []);

  const handlePageLoad = async () => {
    if (window.location.pathname.split("/")[1] === "") {
      setCurrentPage("home");
    } else {
      setCurrentPage(window.location.pathname.split("/")[1]);
    }
  };

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
