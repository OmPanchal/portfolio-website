"use client";
import { useGlobals } from "@/context/GeneralContext";
import React from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const ProjectsCurrentlyPlaying = () => {
  const { setIsProjectsPlayerOpen } = useGlobals();

  return (
    <div
      onClick={() => {
        setIsProjectsPlayerOpen(true);
      }}
      className="lg:scale-0 scale-100 absolute bottom-0 w-full p-6 bg-black border-t border-t-gray-700 flex flex-row items-center justify-evenly"
    >
      <MdOutlineKeyboardArrowUp className="p-2 size-10" />
    </div>
  );
};

export default ProjectsCurrentlyPlaying;
