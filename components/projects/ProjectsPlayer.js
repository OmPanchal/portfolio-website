"use client";
import { useGlobals } from "@/context/GeneralContext";
import Image from "next/image";
import { useRef, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaGithub, FaPause, FaPlay } from "react-icons/fa";
import { IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { PiShuffleAngularFill } from "react-icons/pi";
import logo from "./logo/logo-yellow.png";
import { FaLink } from "react-icons/fa6";
import HorizontalScroll from "../HorizontalScroll";
import Link from "next/link";
import { projectsIcons } from "@/utils/constants";
import ProjectsChip from "./ProjectsChip";

const ProjectsPlayer = () => {
  const {
    isProjectsPlayerOpen,
    setIsProjectsPlayerOpen,
    projects,
    queueIdx,
    currentAlbum,
    currentProject,
    queue,
    setQueueIdx,
  } = useGlobals();
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div
      className={`lg:relative fixed lg:h-svh lg:w-[40%] w-full h-full bg-black lg:border-l lg:border-l-gray-800 z-10 duration-300 transition-all ${isProjectsPlayerOpen ? "bottom-0" : "lg:bottom-0 -bottom-full"} flex flex-col items-center justify-evenly overflow-auto no-scrollbar`}
    >
      {currentProject == null ? (
        <div>Nothing is playing yet</div>
      ) : (
        <>
          <div className="w-full bg-black flex flex-row items-center justify-between lg:p-8 p-4">
            <MdOutlineKeyboardArrowDown
              className="lg:scale-0 scale-100 p-2 size-10"
              onClick={() => {
                setIsProjectsPlayerOpen(false);
              }}
            />
          </div>
          {/* Main "player"*/}
          <div className="flex flex-col w-full flex-1 bg-black lg:px-24 p-8 lg:gap-14 gap-6">
            <p className="lg:text-xl font-thin lg:px-6 px-4 lg:py-4 py-2 text-center ">
              {/* TODO: Possibly allow for playlists as well*/}
              Playing from <a className="font-normal">{currentAlbum.name}</a>
            </p>
            <img src={currentProject.cover} alt="doh" className="rounded-4xl" />
            <div className="flex flex-col items-start justify-around gap-2 ">
              <div className="flex flex-row items-center justify-between w-full">
                {/* NAME */}
                <p className="lg:text-6xl text-3xl font-bold">
                  {currentProject.name}
                </p>
                {/* WEBSITES */}
                <div className="flex flex-row items-center lg:gap-6 gap-3 ">
                  {currentProject.links.map((link, idx) => {
                    return (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={link.link}
                        key={idx}
                      >
                        {projectsIcons[link.type]}
                      </a>
                    );
                  })}
                </div>
              </div>
              {/* AUTHORS */}
              <HorizontalScroll className="flex flex-row items-center justify-start max-w-full min-h-max lg:gap-6 gap-4 overflow-x-auto no-scrollbar">
                {currentProject.authors.map((author, idx) => {
                  return (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={author.link}
                      key={idx}
                      className="text-white/80 underline lg:text-xl text-xs min-w-max"
                    >
                      {author.name}
                    </a>
                  );
                })}
              </HorizontalScroll>
            </div>
            <HorizontalScroll className="flex flex-row items-center justify-start max-w-full min-h-max gap-4 mb-8 overflow-x-auto no-scrollbar">
              {/* LANGUAGES */}
              {currentProject.languages.map((language, idx) => {
                return (
                  <ProjectsChip colour="green" key={idx}>
                    {language}
                  </ProjectsChip>
                );
              })}
              {/* TAGS */}
              {currentProject.tags.map((tag, idx) => {
                return (
                  <ProjectsChip colour="white" key={idx}>
                    {tag}
                  </ProjectsChip>
                );
              })}
            </HorizontalScroll>
            {/* SLIDER */}
            <div className="w-full p-1 rounded-full bg-white/20"></div>
            {/* PLAYER BUTTONS */}
            <div className="flex flex-row items-center justify-evenly">
              {/* SHUFFLE*/}
              <PiShuffleAngularFill className="lg:size-12 size-6 cursor-pointer transition-all hover:animate-spin" />
              {/* PREVIOUS */}
              <button
                className="transition-all bg-white/10 lg:p-6 p-3 rounded-full cursor-pointer relative hover:bg-white/20 disabled:cursor-default disabled:hover:bg-white/10 group"
                disabled={queueIdx == 0}
                onClick={() => {
                  setQueueIdx(queueIdx - 1);
                }}
              >
                <IoMdSkipBackward className="lg:size-12 size-6 text-white/80 group-disabled:text-white/40" />
              </button>
              {/* PLAY/PAUSE*/}
              {isPlaying ? (
                <Image
                  className={`cursor-pointer lg:size-28.75 size-17 border border-white/70 rounded-full ${isPlaying ? "animate-spin" : ""}`}
                  onClick={() => {
                    setIsPlaying(!isPlaying);
                  }}
                  src={logo}
                  alt="playing"
                />
              ) : (
                <button
                  onClick={() => {
                    setIsPlaying(!isPlaying);
                  }}
                  className="lg:p-8 p-4 rounded-full border-white/30 border-2 bg-white/20 cursor-pointer transition-all hover:bg-white/30"
                >
                  <FaPlay className="lg:size-12 size-8" />
                </button>
              )}
              {/* SKIP*/}
              <button
                className="transition-all bg-white/10 lg:p-6 p-3 rounded-full cursor-pointer relative hover:bg-white/20 disabled:cursor-default disabled:hover:bg-white/10 group"
                disabled={queueIdx == queue.length - 1}
                onClick={() => {
                  setQueueIdx(queueIdx + 1);
                }}
              >
                <IoMdSkipForward className="lg:size-12 size-6 text-white/80 group-disabled:text-white/40" />
              </button>
              {/* LIKE */}
              <AiOutlineLike className="lg:size-12 size-6 cursor-pointer transition-all hover:-mt-2" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectsPlayer;
