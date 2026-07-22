import React from "react";

const AboutStatsPageGroup = ({ children }) => {
  return (
    <div className="w-full flex flex-1 flex-col p-8 gap-4 border-y">
      {children}
    </div>
  );
};

export default AboutStatsPageGroup;
