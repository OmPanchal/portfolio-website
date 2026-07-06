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
import { FaAnglesDown, FaLink } from "react-icons/fa6";

const ProjectsPlayer = () => {
  const { isProjectsPlayerOpen, setIsProjectsPlayerOpen, projects } =
    useGlobals();
  const [isPlaying, setIsPlaying] = useState(true);

  const scrollRef = useRef(null);

  const handleWheel = (e) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  const p = projects.projects[1];
  console.log(p.cover);

  return (
    <div
      className={`lg:relative fixed lg:h-svh lg:w-[40%] w-full h-full bg-black lg:border-l lg:border-l-gray-800 z-10 duration-300 transition-all ${isProjectsPlayerOpen ? "bottom-0" : "lg:bottom-0 -bottom-full"} flex flex-col items-center justify-evenly overflow-auto no-scrollbar`}
    >
      <div className="w-full bg-black flex flex-row items-center justify-between lg:p-8 p-4">
        <MdOutlineKeyboardArrowDown
          className="lg:scale-0 scale-100 p-2 size-10"
          onClick={() => {
            setIsProjectsPlayerOpen(false);
          }}
        />
      </div>
      {/* Main "player"*/}
      <div className="flex flex-col w-full flex-1 bg-black lg:px-24 p-8 lg:gap-14 gap-6 ">
        <p className="lg:text-xl font-thin lg:px-6 px-4 lg:py-4 py-2 text-center ">
          Playing from <a className="font-normal">AI From Scratch</a>
        </p>
        <img src={p.cover} alt="doh" className="rounded-4xl" />
        <div className="flex flex-col items-start justify-around gap-2 ">
          <div className="flex flex-row items-center justify-between w-full">
            <p className="lg:text-6xl text-3xl font-bold">{p.name}</p>
            <div className="flex flex-row items-center lg:gap-6 gap-3 ">
              <FaGithub className="lg:size-12 size-6" />
              <FaLink className="lg:size-12 size-6" />
            </div>
          </div>
          <p className="text-white/80 underline lg:text-xl text-xs">
            {p.authors[0].name}
          </p>
        </div>
        <div
          ref={scrollRef}
          onWheel={handleWheel}
          className="flex flex-row items-center justify-start max-w-full min-h-max gap-4 mb-8 overflow-x-auto no-scrollbar"
        >
          <div className="lg:text-xl font-thin text-xs lg:px-6 px-4 lg:py-4 py-2 bg-green-500/20 border-2 border-green-500/30 rounded-full text-green-500">
            {p.languages[0]}
          </div>
          <div className="lg:text-xl font-thin text-xs lg:px-6 px-4 lg:py-4 py-2 bg-white/10 border-2 border-white/20 min-w-max rounded-full text-white">
            {p.tags[0]}
          </div>
          <div className="lg:text-xl font-thin text-xs lg:px-6 px-4 lg:py-4 py-2 bg-white/10 border-2 border-white/20 min-w-max rounded-full text-white">
            {p.tags[1]}
          </div>
          <div className="lg:text-xl font-thin text-xs lg:px-6 px-4 lg:py-4 py-2 bg-white/10 border-2 border-white/20 min-w-max rounded-full text-white">
            {p.tags[2]}
          </div>
        </div>
        {/* Slider */}
        <div className="w-full p-1 rounded-full bg-white/20"></div>
        {/* Tags*/}
        {/* buttons */}
        <div className="flex flex-row items-center justify-evenly">
          <PiShuffleAngularFill className="lg:size-12 size-6" />
          <button className="transition-all bg-white/10 lg:p-6 p-3 rounded-full cursor-pointer relative hover:bg-white/20">
            <IoMdSkipBackward className="lg:size-12 size-6 text-white/80" />
          </button>
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
          <button className="transition-all bg-white/10 lg:p-6 p-3 rounded-full cursor-pointer relative hover:bg-white/20">
            <IoMdSkipForward className="lg:size-12 size-6 text-white/80" />
          </button>
          <AiOutlineLike className="lg:size-12 size-6" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPlayer;
