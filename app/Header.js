import React from "react";

const Header = ({ className, children }) => {
  return (
    <h1
      className={`font-[space-mono-b] sm:text-[96px] text-[38px] ${className}`}
    >
      {children}
    </h1>
  );
};

export default Header;
