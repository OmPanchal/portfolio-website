"use client";
import { usePathname } from "next/navigation";
import ProjectsLogo from "./ProjectsLogo";
import { paths } from "@/utils/constants";
import ProjectsSidebarLink from "./ProjectsSidebarLink";
import { useGlobals } from "@/context/GeneralContext";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const ProjectsSidebar = () => {
  const pathName = usePathname();
  const { isProjectsSidebarOpen, setIsProjectsSidebarOpen } = useGlobals();

  return (
    <div
      className={`flex flex-col items-start duration-300 transition-all lg:w-[15%] w-full absolute lg:relative lg:left-0 z-10 lg:min-w-fit h-svh bg-black lg:border-r lg:border-r-gray-800 p-8 gap-8 ${isProjectsSidebarOpen ? "left-0" : "-left-full"}`}
    >
      <ProjectsLogo />
      <div className="flex flex-col items-center justify-start w-full flex-1">
        <div className="flex flex-col w-full items-center gap-2">
          {paths.map((path, i) => {
            return (
              <ProjectsSidebarLink
                onClick={() => {
                  setIsProjectsSidebarOpen(false);
                }}
                selected={pathName == path.path}
                key={i}
                href={path.path}
                name={path.name}
                icon={path.projectsIcon}
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-row items-center w-full justify-end">
        <button
          className="scale-100 lg:scale-0"
          onClick={() => {
            setIsProjectsSidebarOpen(!isProjectsSidebarOpen);
          }}
        >
          <MdOutlineKeyboardArrowLeft className="p-3 size-12 border-gray-700 border rounded-full" />
        </button>
      </div>
    </div>
  );
};

export default ProjectsSidebar;
