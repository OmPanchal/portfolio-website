"use client";
import { useGlobals } from "@/context/GeneralContext";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const ProjectsPlayer = () => {
  const { isProjectsPlayerOpen, setIsProjectsPlayerOpen, projects } =
    useGlobals();

  const p = projects.projects[0];
  console.log(p.cover);

  return (
    <div
      className={`lg:relative fixed lg:h-svh lg:w-[40%] w-full h-full bg-black lg:border-l lg:border-l-gray-800 z-10 duration-300 transition-all ${isProjectsPlayerOpen ? "bottom-0" : "lg:bottom-0 -bottom-full"} flex flex-col items-center justify-evenly`}
    >
      <div className="w-full bg-black flex flex-row items-center justify-between p-8">
        <MdOutlineKeyboardArrowDown
          className="lg:scale-0 scale-100 p-2 size-10"
          onClick={() => {
            setIsProjectsPlayerOpen(false);
          }}
        />
        <p className="text-sm font-thin">
          Playing from <a className="font-normal">Projects</a>
        </p>
      </div>
      {/* Main "player"*/}
      <div className="flex flex-col w-full flex-1 bg-black lg:p-24 p-8 gap-10">
        <img src={p.cover} alt="doh" className="rounded-4xl" />
      </div>
    </div>
  );
};

export default ProjectsPlayer;
