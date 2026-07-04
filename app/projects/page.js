import ProjectsCurrentlyPlaying from "@/components/projects/ProjectsCurrentlyPlaying";
import ProjectsHeader from "@/components/projects/ProjectsHeader";
import ProjectsPlayer from "@/components/projects/ProjectsPlayer";
import ProjectsSidebar from "@/components/projects/ProjectsSidebar";
import ProjectSidebar from "@/components/projects/ProjectsSidebar";
import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-row flex-1 items-center bg-black h-full font-[Unbound]">
      <ProjectsSidebar />
      <div className="flex flex-row items-center flex-1 h-svh">
        <div className="flex flex-col h-svh 2xl:w-[60%] w-full bg-black">
          <ProjectsHeader />
        </div>
        <ProjectsPlayer />
        {/* <div className="flex flex-col h-svh 2xl:w-[40%] bg-amber-800 2xl:min-w-180 2xl:scale-100 scale-0"></div>*/}
        <ProjectsCurrentlyPlaying />
      </div>
    </div>
  );
};

export default Projects;
