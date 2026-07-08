"use client";
import { useGlobals } from "@/context/GeneralContext";
import React from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const ProjectsCurrentlyPlaying = () => {
  const { setIsProjectsPlayerOpen, currentProject } = useGlobals();
  // const p = projects.projects[1];

  return (
    <div
      onClick={() => {
        setIsProjectsPlayerOpen(true);
      }}
      className="lg:scale-0 scale-100 absolute bottom-0 w-full p-4 bg-black border-t border-t-gray-700 flex flex-row items-center justify-evenly gap-4"
    >
      {" "}
      {currentProject?.cover ? (
        <img
          src={currentProject?.cover}
          alt="doh"
          className="w-16 rounded-xl"
        />
      ) : (
        <div className="bg-white/20 w-16 h-16 rounded-xl"></div>
      )}
      <div className="flex flex-col items-start flex-1">
        <p className="text-xl font-bold">
          {currentProject?.name || "Nothing Playing"}
        </p>
        <p className="text-white/80 underline text-[10px]">
          {currentProject?.authors[0].name || ""}
        </p>
      </div>
      <div>
        <MdOutlineKeyboardArrowUp className="size-6" />
      </div>
    </div>
  );
};

export default ProjectsCurrentlyPlaying;
