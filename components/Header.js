import react from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaMedium } from "react-icons/fa6";
import { LuMenu } from "react-icons/lu";

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full">
      <div className="flex md:flex-row md:gap-12 flex-col items-center justify-between gap-2">
        <h1 className="md:text-6xl text-3xl">Om Panchal</h1>
        {/* <div className="w-max flex md:gap-8 gap-4 flex-row items-center right-[50%]">
          <FaLinkedin className="md:size-10 size-6" />
          <FaGithub className="md:size-10 size-6" />
          <FaMedium className="md:size-10 size-6" />
        </div>*/}
      </div>
      <button className="p-4 hover:invert bg-white rounded-full cursor-pointer transition-all duration-300">
        <LuMenu className="md:size-10 size-6" color="black" />
      </button>
    </div>
  );
};

export default Header;
