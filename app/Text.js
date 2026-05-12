import React from "react";

const Text = ({ className, weight, children }) => {
  return (
    <p className={`text-[16px] ${className} font-[space-mono-${weight}]`}>
      {children}
    </p>
  );
};

export default Text;
