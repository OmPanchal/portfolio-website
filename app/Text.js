import React from "react";

const Text = ({ className, weight, children }) => {
  return (
    <p
      className={`font-[space-mono-${weight != null ? weight : "r"}] text-[16px] ${className}`}
    >
      {children}
    </p>
  );
};

export default Text;
