import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

const SocialRack = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-4 w-full">
      <Link
        className="hover:scale-110 transition-all"
        href="https://github.com/OmPanchal"
      >
        <FaGithub size={32} />
      </Link>
      <Link
        className="hover:scale-110 transition-all"
        href="https://www.linkedin.com/in/panchal-om/"
      >
        <FaLinkedin size={32} />
      </Link>
      <Link
        className="hover:scale-110 transition-all"
        href="https://medium.com/@om_panchal"
      >
        <FaMedium size={32} />
      </Link>
    </div>
  );
};

export default SocialRack;
