import React, { useState, createContext, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const HeaderContext = createContext();

export const useHeaderContext = () => {
  return useContext(HeaderContext);
};

function HeaderProvider({ children }) {
  const [currentPage, setCurrentPage] = useState("");
  const [isMobile, setIsMobil] = useState(false);

  const location = useLocation();

  const handlePageLoad = async (location) => {
    if (location.pathname.split("/")[1] === "") {
      setCurrentPage("home");
    } else {
      setCurrentPage(location.pathname.split("/")[1]);
    }
  };

  const handleViewPort = () => {
    if (window.innerWidth > 600) {
      setIsMobil(false);
    } else {
      setIsMobil(true);
    }
  };

  useEffect(() => {
    handlePageLoad(location);
  }, [location]);

  useEffect(() => {
    handleViewPort();

    window.addEventListener("resize", handleViewPort);

    return () => {
      window.removeEventListener("resize", handleViewPort);
    };
  }, []);

  return (
    <HeaderContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        isMobile,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
}

export default HeaderProvider;
