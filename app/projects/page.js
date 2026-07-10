import ProjectsCurrentlyPlaying from "@/components/projects/ProjectsCurrentlyPlaying";
import ProjectsHeader from "@/components/projects/ProjectsHeader";
import ProjectsPlayer from "@/components/projects/ProjectsPlayer";
import ProjectsSelector from "@/components/projects/ProjectsSelector";
import ProjectsSidebar from "@/components/projects/ProjectsSidebar";
import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-row flex-1 items-center bg-black h-full font-[Unbound] select-none relative">
      <ProjectsSidebar />
      <div className="flex relative flex-row items-center h-svh flex-1 min-w-0">
        <div className="flex flex-col h-svh bg-black/20 flex-1 min-w-0 ">
          <ProjectsHeader />
          <ProjectsSelector />
        </div>
        <ProjectsPlayer />
        <ProjectsCurrentlyPlaying />
      </div>
    </div>
  );
};

export default Projects;
