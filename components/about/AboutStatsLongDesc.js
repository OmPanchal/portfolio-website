import React from "react";

const AboutStatsLongDesc = ({ children, powerUp, increment }) => {
  return (
    <div className="flex flex-col items-start w-full">
      {powerUp && (
        <div
          className="sm:text-3xl text-xl font-bold"
          style={{ color: powerUp.colour.on }}
        >
          [{powerUp.name} +{increment} sec]
        </div>
      )}
      <div className="sm:text-3xl text-xl font-bold my-1">{children}</div>
    </div>
  );
};

export default AboutStatsLongDesc;
