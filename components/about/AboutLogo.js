import React from "react";
import o from "./logo/O.png";
import Image from "next/image";

const AboutLogo = () => {
  return (
    <div className="flex flex-row items-center sm:text-7xl text-5xl">
      <Image
        src={o}
        alt="o"
        className="sm:w-24 w-16 mr-2 animate-spin -z-10 [animation-duration:_8s]"
      />
      <p>m Panchal</p>
    </div>
  );
};

export default AboutLogo;
