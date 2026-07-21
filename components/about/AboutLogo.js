import React from "react";
import o from "./logo/O.png";
import Image from "next/image";

const AboutLogo = () => {
  return (
    <div className="flex flex-row items-center text-7xl fixed top-0 left-0 m-6">
      <Image
        src={o}
        alt="o"
        className=" w-24 mr-2 animate-spin -z-10 [animation-duration:_8s]"
      />
      <p>m Panchal</p>
    </div>
  );
};

export default AboutLogo;
