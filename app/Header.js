import React from "react";
import HeaderLink from "./HeaderLink";
import { IoCodeSlashSharp, IoHomeOutline } from "react-icons/io5";
import { PiBird } from "react-icons/pi";

const Header = () => {
  return (
    <div className="absolute top-0 p-8 flex flex-row items-center gap-12 overflow-scroll max-w-full">
      <HeaderLink selected label="HOME" link="/">
        <IoHomeOutline />
      </HeaderLink>
      <HeaderLink className="" label="ABOUT_ME" link="/aboutme">
        <PiBird />
      </HeaderLink>
      <HeaderLink className="" label="PROJECTS" link="/projects">
        <IoCodeSlashSharp />
      </HeaderLink>
    </div>
  );
};

export default Header;
