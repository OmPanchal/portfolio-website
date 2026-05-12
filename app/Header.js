"use client";
import React, { useEffect, useState } from "react";
import HeaderLink from "./HeaderLink";
import { IoCodeSlashSharp, IoHomeOutline } from "react-icons/io5";
import { PiBird } from "react-icons/pi";
import { usePathname } from "next/navigation";

const generatePathDetails = (path, icon, label) => {
  return { path, icon, label };
};

const Header = () => {
  const pathName = usePathname();

  const paths = [
    generatePathDetails("/", <IoHomeOutline />, "HOME"),
    generatePathDetails("/aboutme", <PiBird />, "ABOUT_ME"),
    generatePathDetails("/projects", <IoCodeSlashSharp />, "PROJECTS"),
  ];

  return (
    <div className="absolute top-0 p-8 flex flex-row items-center gap-12 overflow-scroll max-w-full no-scrollbar">
      {paths.map((element, idx) => {
        return (
          <HeaderLink
            selected={pathName == element.path}
            key={idx}
            label={element.label}
            link={element.path}
          >
            {element.icon}
          </HeaderLink>
        );
      })}
    </div>
  );
};

export default Header;
