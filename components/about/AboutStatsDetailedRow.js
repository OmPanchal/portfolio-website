import React from "react";
import AboutStatsPageHeading from "./AboutStatsPageHeading";

const AboutStatsDetailedRow = ({
  children,
  heading,
  shortDescription,
  date,
}) => {
  return (
    <div className="w-full flex flex-col my-2">
      <AboutStatsPageHeading heading={"‣ " + heading} />
      <div className="sm:text-3xl text-xl">
        {shortDescription}{" "}
        <label className="sm:text-3xl text-xl font-bold text-sky-400">
          {date}
        </label>
      </div>
      {children}
    </div>
  );
};

export default AboutStatsDetailedRow;
