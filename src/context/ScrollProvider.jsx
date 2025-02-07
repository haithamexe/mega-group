import React, { useState, useEffect, createContext, useContext } from "react";

const ScrollContext = createContext();

export function useScrollContext() {
  return useContext(ScrollContext);
}

function ScrollProvider({ children }) {
  const [scrollY, setScrollY] = useState(0);

  const values = {};

  return (
    <ScrollContext.Provider value={values}>{children}</ScrollContext.Provider>
  );
}

export default ScrollProvider;
