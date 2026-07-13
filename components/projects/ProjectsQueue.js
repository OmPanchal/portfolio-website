import { useGlobals } from "@/context/GeneralContext";
import React from "react";
import HorizontalScroll from "../HorizontalScroll";
import { FaPlay } from "react-icons/fa";
import logo from "./logo/logo-yellow.png";
import Image from "next/image";
import ProjectsAuthorList from "./ProjectsAuthorList";

const ProjectsQueue = () => {
  const { queue, setQueue, queueIdx, setQueueIdx, currentAlbum } = useGlobals();

  return (
    <div className="flex flex-col items-center justify-start">
      {queue.map((project, idx) => {
        return (
          <div
            className={`flex flex-row items-center ${queue[queueIdx] === project ? "bg-white/15 rounded-2xl" : ""} w-full lg:p-3 p-2 cursor-pointer hover:bg-white/15 hover:rounded-2xl transition-all gap-4`}
            key={idx}
            onClick={() => {
              setQueueIdx(idx);
            }}
          >
            <img src={project?.cover} className="lg:w-20 w-12 rounded-2xl" />
            <div className="w-full">
              <p className="lg:text-2xl font-bold">{project?.name}</p>
              <ProjectsAuthorList project={project} />
            </div>
            <div className="w-fit px-2">
              {queue[queueIdx] === project ? (
                <Image
                  src={logo}
                  alt="playing"
                  className="w-20 rounded-full border border-white/40 animate-spin"
                />
              ) : (
                <FaPlay className="lg:size-6 size-4 mx-2" />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsQueue;
