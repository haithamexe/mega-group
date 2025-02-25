import React, { createContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTopProvider() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    alert("scrolling to top");
  }, [pathname]);

  return null;
}

export default ScrollToTopProvider;
