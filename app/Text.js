import React from "react";

const Text = ({ className, children }) => {
  return (
    <p className={`font-[space-mono-r] text-[16px] ${className}`}>{children}</p>
  );
};

export default Text;
