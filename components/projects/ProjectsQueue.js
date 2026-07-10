import { useGlobals } from "@/context/GeneralContext";
import React from "react";
import HorizontalScroll from "../HorizontalScroll";
import { FaPlay } from "react-icons/fa";
import logo from "./logo/logo-yellow.png";
import Image from "next/image";

const ProjectsQueue = () => {
  const { queue, setQueue, queueIdx, setQueueIdx, currentAlbum } = useGlobals();

  return (
    <div className="flex flex-col items-center justify-start lg:gap-4 gap-2">
      {queue.map((project, idx) => {
        return (
          <div
            className={`flex flex-row items-center ${queue[queueIdx] === project ? "bg-white/20" : "bg-white/15"} w-full lg:p-3 p-2 gap-4 rounded-2xl cursor-pointer hover:bg-white/20 transition-all`}
            key={idx}
            onClick={() => {
              setQueueIdx(idx);
            }}
          >
            <img src={project.cover} className="lg:w-20 w-12 rounded-2xl" />
            <div className="w-full">
              <p className="lg:text-2xl font-bold">{project.name}</p>
              <HorizontalScroll>
                {project.authors.map((author, idx) => {
                  return (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={author.link}
                      key={idx}
                      className="underline lg:text-base text-xs"
                    >
                      {author.name}
                    </a>
                  );
                })}
              </HorizontalScroll>
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
