"use client";
import { useGlobals } from "@/context/GeneralContext";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";

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
      <input
        type="text"
        placeholder="Search Project"
        className="bg-white/20 lg:p-6 p-4 lg:text-2xl text-sm outline-none rounded-2xl lg:w-[60%] w-full"
      />
    </div>
  );
};

export default ProjectsHeader;
