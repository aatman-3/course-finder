import React, { createContext, useContext } from "react";
import useIsMobile from "../hooks/useIsMobile";

const IsMobileContext = createContext();

export const useIsMobileContext = () => useContext(IsMobileContext);

export const IsMobileProvider = ({ children }) => {
  const isMobile = useIsMobile();

  return (
    <IsMobileContext.Provider value={isMobile}>
      {children}
    </IsMobileContext.Provider>
  );
};
