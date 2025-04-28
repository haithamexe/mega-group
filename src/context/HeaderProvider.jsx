import React, { useState, createContext, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const HeaderContext = createContext();

export const useHeaderContext = () => {
  return useContext(HeaderContext);
};

function HeaderProvider({ children }) {
  const [currentPage, setCurrentPage] = useState("");

  const location = useLocation();

  useEffect(() => {
    handlePageLoad(location);
  }, [location]);

  const handlePageLoad = async (location) => {
    if (location.pathname.split("/")[1] === "") {
      setCurrentPage("home");
    } else {
      setCurrentPage(location.pathname.split("/")[1]);
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
