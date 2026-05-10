import React from "react";

const Text = ({ className, weight = "r", children }) => {
  return (
    <p className={`font-[space-mono-${weight}] text-[16px] ${className}`}>
      {children}
    </p>
  );
};

export default Text;
