"use client";
import { createContext, useContext, useState } from "react";

const GeneralContext = createContext();

export const GeneralProvider = ({ children }) => {
  const [isProjectsSidebarOpen, setIsProjectsSidebarOpen] = useState(false);
  const [isProjectsPlayerOpen, setIsProjectsPlayerOpen] = useState(false);

  const obj = {
    isProjectsSidebarOpen,
    setIsProjectsSidebarOpen,
    isProjectsPlayerOpen,
    setIsProjectsPlayerOpen,
  };
  return (
    <GeneralContext.Provider value={obj}>{children}</GeneralContext.Provider>
  );
};

export const useGlobals = () => useContext(GeneralContext);
