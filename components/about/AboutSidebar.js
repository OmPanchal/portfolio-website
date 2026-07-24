import { paths } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import AboutLogo from "./AboutLogo";
import { useGlobals } from "@/context/GeneralContext";
import { useWindowSize } from "@/hooks/useWindowSize";

const AboutSidebar = ({ state, setState }) => {
  const pathName = usePathname();
  const {
    isAboutStatsPageOpen,
    setIsAboutStatsPageOpen,
    isAboutSidebarOpen,
    setIsAboutSidebarOpen,
  } = useGlobals();
  const windowSize = useWindowSize();

  return (
    <div
      className={`display flex flex-col items-start justify-center sm:text-5xl text-3xl font-[HyperSpace] fixed h-full ${isAboutSidebarOpen ? "left-0" : "-left-full"} font-light p-4 sm:w-fit w-full sm:z-0 z-30 bg-black`}
    >
      <AboutLogo />
      <div className="flex h-full flex-1 flex-col justify-center gap-8 p-4">
        {paths.map((path, idx) => {
          return (
            <a
              href={path.path}
              key={idx}
              className={`${path.path === pathName && "font-bold sm:text-6xl text-5xl"} hover:font-bold hover:text-6xl`}
              onClick={() => {
                setIsAboutSidebarOpen(false);
              }}
            >
              {path.name}
            </a>
          );
        })}
      </div>
      {windowSize.width < 640 && (
        <div
          className="flex flex-row items-center justify-end w-full"
          onClick={() => {
            setIsAboutSidebarOpen(false);
          }}
        >
          {"<"} Close
        </div>
      )}
    </div>
  );
};

export default AboutSidebar;
