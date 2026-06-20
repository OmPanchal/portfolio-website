"use client";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { RxCross1, RxCross2 } from "react-icons/rx";
import Heading from "./Heading";
import { FaGithub, FaLinkedin, FaLinkedinIn, FaMedium } from "react-icons/fa6";
import Link from "next/link";

const HomeSidebar = () => {
  const [isHomeSidebarOpen, setIsHomeSidebarOpen] = useState(false);

  return (
    <div className="w-fit h-fit">
      <button
        onClick={() => {
          setIsHomeSidebarOpen(!isHomeSidebarOpen);
        }}
        className="p-4 hover:invert bg-white rounded-full cursor-pointer transition-all duration-300 z-999"
      >
        <LuMenu className="md:size-10 size-6" color="black" />
      </button>
      <div
        className={`${!isHomeSidebarOpen ? "opacity-0" : "opacity-100 md:w-130 md:h-[60%] w-full h-full rounded-none"} bg-white md:rounded-[36px] w-1 h-1 absolute md:right-6 md:top-6 right-0 top-0 md:p-0 p-6 transition-all duration-300 flex flex-col items-center justify-between`}
      >
        <div className="w-full flex flex-row items-end justify-end">
          <button
            onClick={() => {
              setIsHomeSidebarOpen(!isHomeSidebarOpen);
            }}
            className="z-999 p-4 hover:invert bg-white rounded-full cursor-pointer transition-all duration-300"
          >
            <RxCross2 className="md:size-10 size-6" color="black" />
          </button>
        </div>
        <div
          className={`flex-1 flex flex-col items-center gap-8 text-black justify-center ${isHomeSidebarOpen ? "scale-100" : "scale-0"} transition-all duration-300`}
        >
          <Link href="">
            <Heading className="md:text-6xl text-3xl font-bold">Home</Heading>
          </Link>
          <Link href="">
            <Heading className="transition-all hover:md:text-6xl duration-300">
              About me
            </Heading>
          </Link>
          <Link href="">
            <Heading className="transition-all hover:md:text-6xl duration-300">
              Projects
            </Heading>
          </Link>
        </div>
        <div className="p-10 flex flex-row w-full items-center justify-around">
          <Link href="" className="transition-all duration-300 hover:-mt-5">
            <FaLinkedin className="md:size-10 size-6" color="black" />
          </Link>
          <Link href="" className="transition-all duration-300 hover:-mt-5">
            <FaGithub className="md:size-10 size-6" color="black" />
          </Link>
          <Link href="" className="transition-all duration-300 hover:-mt-5">
            <FaMedium className="md:size-10 size-6" color="black" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSidebar;
