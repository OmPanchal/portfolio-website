import ProjectsSidebar from "@/components/projects/ProjectsSidebar";
import ProjectSidebar from "@/components/projects/ProjectsSidebar";
import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-row flex-1 items-center bg-black h-full font-[Unbound]">
      <ProjectsSidebar />
      <div className="flex flex-row items-center flex-1 h-svh">
        <div className="flex flex-col h-svh 2xl:w-[70%] w-full bg-amber-300">
          f
        </div>
        <div className="flex flex-col h-svh 2xl:w-[30%] bg-amber-800 2xl:min-w-180 2xl:scale-100 scale-0"></div>
      </div>
    </div>
  );
};

export default Projects;
