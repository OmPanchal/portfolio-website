"use client";
import { useGlobals } from "@/context/GeneralContext";
import React from "react";

const ProjectsCurrentlyPlaying = () => {
  const { setIsProjectsPlayerOpen } = useGlobals();

  return (
    <div
      onClick={() => {
        setIsProjectsPlayerOpen(true);
      }}
      className="lg:scale-0 scale-100 absolute bottom-0 w-full p-12 bg-green-500"
    ></div>
  );
};

export default ProjectsCurrentlyPlaying;
