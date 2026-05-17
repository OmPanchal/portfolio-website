import React from "react";
import Bordered from "../components/Bordered";

const PageBorder = ({ children }) => {
  return (
    <Bordered className="bg-black flex flex-1 gap-8 items-center justify-center flex-col lg:m-30 lg:mx-40 md:m-20 m-5 p-10 relative">
      {children}
    </Bordered>
  );
};

export default PageBorder;
