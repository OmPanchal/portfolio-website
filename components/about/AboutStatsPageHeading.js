import React from "react";

const AboutStatsPageHeading = ({ children, heading }) => {
  return (
    <h2 className="font-bold sm:text-5xl text-2xl flex flex-row items-center w-full gap-4 ">
      {children}
      {heading}
    </h2>
  );
};

export default AboutStatsPageHeading;
