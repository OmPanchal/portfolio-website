import ProjectsSidebar from "@/components/projects/ProjectsSidebar";
import ProjectSidebar from "@/components/projects/ProjectsSidebar";
import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-row flex-1 items-center bg-black h-full font-[Unbound]">
      <ProjectsSidebar />
      <div className="flex flex-row items-center flex-1 h-svh">
        <div className="flex flex-col h-full xl:w-[60%] w-full bg-amber-300">
          f
        </div>
        <div className="flex flex-col h-full w-[40%] bg-amber-800 min-w-[40%]">
          g
        </div>
      </div>
    </div>
  );
};

export default Projects;
