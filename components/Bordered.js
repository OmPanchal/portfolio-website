import React from "react";

const Bordered = ({ className, children, ...props }) => {
  return (
    <div
      className={`border border-white bg-transparent ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Bordered;
