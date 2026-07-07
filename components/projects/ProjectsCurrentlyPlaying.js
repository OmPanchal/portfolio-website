"use client";
import { useGlobals } from "@/context/GeneralContext";
import React from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const ProjectsCurrentlyPlaying = () => {
  const { setIsProjectsPlayerOpen, projects } = useGlobals();
<<<<<<< HEAD
  const p = projects.projects[1];
=======
  // const p = projects.projects[1];
>>>>>>> 9e531aa (Added Functionality to the Player)

  return (
    <div
      onClick={() => {
        setIsProjectsPlayerOpen(true);
      }}
      className="lg:scale-0 scale-100 absolute bottom-0 w-full p-4 bg-black border-t border-t-gray-700 flex flex-row items-center justify-evenly gap-4"
    >
<<<<<<< HEAD
      <img src={p.cover} alt="doh" className="w-16 rounded-xl" />
=======
      {/* <img src={p.cover} alt="doh" className="w-16 rounded-xl" />
>>>>>>> 9e531aa (Added Functionality to the Player)
      <div className="flex flex-col items-start flex-1">
        <p className="text-xl font-bold">{p.name}</p>
        <p className="text-white/80 underline text-[10px]">
          {p.authors[0].name}
        </p>
      </div>
      <div>
        <MdOutlineKeyboardArrowUp className="size-6" />
<<<<<<< HEAD
      </div>
=======
      </div>*/}
>>>>>>> 9e531aa (Added Functionality to the Player)
    </div>
  );
};

export default ProjectsCurrentlyPlaying;
