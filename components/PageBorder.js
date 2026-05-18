import React from "react";
import Bordered from "../components/Bordered";

const PageBorder = ({ children }) => {
  return (
    <div className="flex flex-1 gap-8 items-center max-h-screen justify-center flex-col">
      {children}
    </div>
  );
};
4;

export default PageBorder;
