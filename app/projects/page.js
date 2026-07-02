import ProjectsSidebar from "@/components/projects/ProjectsSidebar";
import ProjectSidebar from "@/components/projects/ProjectsSidebar";
import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-row flex-1 items-center bg-black h-full font-[Unbound]">
      <ProjectsSidebar />
      <div className="flex flex-row items-center "></div>
    </div>
  );
};

export default Projects;
