"use client";
import { useGlobals } from "@/context/GeneralContext";
import Image from "next/image";
import { useRef, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaGithub, FaPause, FaPlay } from "react-icons/fa";
import {
  IoMdClose,
  IoMdInformation,
  IoMdSkipBackward,
  IoMdSkipForward,
} from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { PiShuffleAngularFill } from "react-icons/pi";
import logo from "./logo/logo-yellow.png";
import HorizontalScroll from "../HorizontalScroll";
import { projectsIcons } from "@/utils/constants";
import ProjectsChip from "./ProjectsChip";
import ProjectsAuthorList from "./ProjectsAuthorList";
import { HiOutlineQueueList } from "react-icons/hi2";
import { LuInfo } from "react-icons/lu";
import ProjectsPlayerTab from "./ProjectsPlayerTab";
import ProjectsQueue from "./ProjectsQueue";

const ProjectsPlayer = () => {
  const {
    isProjectsPlayerOpen,
    setIsProjectsPlayerOpen,
    queueIdx,
    currentAlbum,
    currentProject,
    queue,
    setQueueIdx,
    isQueueTabOpen,
    setIsQueueTabOpen,
    isInformationTabOpen,
    setIsInformationTabOpen,
  } = useGlobals();
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div
      className={`lg:relative fixed lg:h-svh lg:w-[40%] w-full h-full bg-black lg:border-l lg:border-l-gray-800 z-10 duration-300 transition-all ${isProjectsPlayerOpen ? "bottom-0" : "lg:bottom-0 -bottom-full"} flex flex-col items-center justify-start overflow-hidden  no-scrollbar`}
    >
      {queue[queueIdx] == null ? (
        <div>Nothing is playing yet</div>
      ) : (
        <>
          <div className="w-full bg-black flex flex-row items-center justify-between lg:p-8 p-2">
            <MdOutlineKeyboardArrowDown
              className="lg:scale-0 scale-100 p-2 size-10"
              onClick={() => {
                setIsProjectsPlayerOpen(false);
              }}
            />
          </div>

          {/* Main "player"*/}
          <div className="flex flex-col w-full flex-1 bg-black lg:px-24 p-8 py-0 lg:gap-14 gap-3">
            <p className="lg:text-xl font-thin lg:px-6 px-4 lg:py-4 py-2 text-center text-xs">
              Playing from <a className="font-normal">{currentAlbum.name}</a>
            </p>
            <img
              src={queue[queueIdx]?.cover}
              alt="doh"
              className="rounded-4xl"
            />
            <div className="flex flex-col items-start justify-around gap-2 ">
              <div className="flex flex-row items-center justify-between w-full">
                {/* NAME */}
                <p className="lg:text-6xl text-3xl font-bold">
                  {queue[queueIdx]?.name}
                </p>

                {/* WEBSITES */}
                <div className="flex flex-row items-center lg:gap-6 gap-3 ">
                  {queue[queueIdx]?.links.map((link, idx) => {
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
              <ProjectsAuthorList project={queue[queueIdx]} />
            </div>
            <HorizontalScroll className="flex flex-row items-center justify-start max-w-full min-h-max gap-4 mb-2 -mt-2 overflow-x-auto no-scrollbar">
              {/* LANGUAGES */}
              {queue[queueIdx]?.languages.map((language, idx) => {
                return (
                  <ProjectsChip colour="green" key={idx}>
                    {language}
                  </ProjectsChip>
                );
              })}

              {/* TAGS */}
              {queue[queueIdx]?.tags.map((tag, idx) => {
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
              {/* ABOUT*/}
              <LuInfo
                onClick={() => {
                  setIsInformationTabOpen(true);
                }}
                className="lg:size-12 size-6 cursor-pointer transition-all hover:-mt-2"
              />

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

              {/* QUEUE */}
              <HiOutlineQueueList
                onClick={() => {
                  setIsQueueTabOpen(true);
                }}
                className="lg:size-12 size-6 cursor-pointer transition-all hover:-mt-2"
              />
            </div>
          </div>
        </>
      )}
      {/* QUEUE CONTENTS*/}
      <ProjectsPlayerTab
        headerTitle={currentAlbum.name}
        state={isQueueTabOpen}
        setState={setIsQueueTabOpen}
      >
        <ProjectsQueue />
      </ProjectsPlayerTab>

      {/* ABOUT*/}
      <ProjectsPlayerTab
        headerTitle="About"
        state={isInformationTabOpen}
        setState={setIsInformationTabOpen}
      >
        <div className="font-extralight lg:text-2xl text-sm">
          {queue[queueIdx]?.description}
        </div>
      </ProjectsPlayerTab>
    </div>
  );
};

export default ProjectsPlayer;
