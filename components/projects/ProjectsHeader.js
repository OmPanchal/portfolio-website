"use client";
import { useGlobals } from "@/context/GeneralContext";
import { IoMdMenu } from "react-icons/io";
import ProjectsSearchBar from "./ProjectsSearchBar";

const ProjectsHeader = () => {
  const { isProjectsSidebarOpen, setIsProjectsSidebarOpen } = useGlobals();

  return (
    <div className="w-full bg-black lg:p-10 p-4 flex flex-row lg:justify-start items-center justify-between lg:gap">
      <button
        className={`cursor-pointer lg:scale-0 scale-100`}
        onClick={() => {
          setIsProjectsSidebarOpen(true);
        }}
      >
        <IoMdMenu className="p-3 size-12 border-gray-700 mr-2 border rounded-full" />
      </button>
      <ProjectsSearchBar />
    </div>
  );
};

export default ProjectsHeader;
