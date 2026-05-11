import React from "react";

const Heading = ({ className, children }) => {
  return (
    <h1
      className={`text-center font-[space-mono-b] sm:text-[120px] text-[48px] ${className}`}
    >
      {children}
    </h1>
  );
};

export default Heading;
