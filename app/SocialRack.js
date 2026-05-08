import React from "react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

const SocialRack = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-3 w-full">
      <a href="https://github.com/OmPanchal">
        <FaGithub size={26} />
      </a>
      <a href="https://www.linkedin.com/in/panchal-om/">
        <FaLinkedin size={26} />
      </a>
      <a href="https://medium.com/@om_panchal">
        <FaMedium size={26} />
      </a>
    </div>
  );
};

export default SocialRack;
