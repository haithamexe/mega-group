import React, { createContext, useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTopProvider() {
  const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  useLayoutEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

export default ScrollToTopProvider;
