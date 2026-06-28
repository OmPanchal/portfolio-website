"use client";
import { usePathname } from "next/navigation";
import { createContext, useContext } from "react";

const GeneralContext = createContext();

export const GeneralProvider = ({ children }) => {
  const obj = {};

  return (
    <GeneralContext.Provider value={obj}>{children}</GeneralContext.Provider>
  );
};

export const useGlobals = () => useContext(GeneralProvider);
