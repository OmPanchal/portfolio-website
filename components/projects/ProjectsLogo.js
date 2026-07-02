import Image from "next/image";
import React from "react";
import logo from "./logo/logo-yellow.png";

const ProjectsLogo = () => {
  return (
    <div className="flex flex-row items-center justify-around gap-2 relative group cursor-default ">
      <Image
        src={logo}
        alt="logo"
        className="w-16 group-hover:animate-spin border-gray-600 border rounded-full"
      />
      <p className="font-[Unbound] font-extrabold text-[36px] text-gray-200 transition-all group-hover:text-white">
        m Panchal
      </p>
    </div>
  );
};

export default ProjectsLogo;
