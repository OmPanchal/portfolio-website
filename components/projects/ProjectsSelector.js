"use client";
import { useGlobals } from "@/context/GeneralContext";
import HorizontalScroll from "../HorizontalScroll";
import ProjectsAuthorList from "./ProjectsAuthorList";
import { FaPlay } from "react-icons/fa";
import logo from "./logo/logo-yellow.png";
import Image from "next/image";

const ProjectsSelector = () => {
  const { projects, currentProject, setCurrentProject, setQueueIdx, queue } =
    useGlobals();

  return (
    <div className="flex-1 overflow-auto max-h-full flex flex-col items-center justify-start no-scrollbar">
      <div className="w-full lg:p-12 p-6 my-4 flex flex-col max-w-full overflow-auto no-scrollbar lg:gap-8 gap-4">
        <p className="lg:text-4xl text-xl font-bold">Featured Projects</p>
        <HorizontalScroll className="flex flex-row items-center justify-start max-w-full min-h-max lg:gap-16 gap-8 overflow-x-auto no-scrollbar">
          {projects.map((project, idx) => {
            return (
              <div
                className="flex flex-col items-start justify-around lg:gap-4 gap-2 lg:w-84 w-32 cursor-pointer group relative"
                key={idx}
                onClick={() => {
                  setQueueIdx(queue.indexOf(project));
                }}
              >
                {currentProject === project ? (
                  <div className="absolute top-0 left-0 lg:w-84 w-32 lg:h-84 h-32 flex flex-row items-center justify-center bg-black/30">
                    <Image
                      src={logo}
                      alt="playing"
                      className="lg:size-28 size-14 animate-spin"
                    />
                  </div>
                ) : (
                  <div className="absolute top-0 left-0 lg:w-84 w-32 lg:h-84 h-32 bg-black/30 opacity-0 group-hover:opacity-100 transition-all flex flex-row items-center justify-center">
                    <FaPlay className="size-12 text-white/80" />
                  </div>
                )}
                <img
                  src={project?.cover}
                  className="lg:w-84 w-32 rounded-2xl"
                />
                <div className="flex flex-col gap-2">
                  <p className="lg:text-2xl text-base text-white font-bold">
                    {project?.name}
                  </p>
                  <ProjectsAuthorList project={project} />
                </div>
              </div>
            );
          })}
        </HorizontalScroll>
      </div>
    </div>
  );
};

export default ProjectsSelector;
