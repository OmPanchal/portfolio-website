"use client";
import { usePathname } from "next/navigation";
import ProjectsLogo from "./ProjectsLogo";
import { paths } from "@/utils/constants";
import ProjectsSidebarLink from "./ProjectsSidebarLink";

const ProjectsSidebar = () => {
  const pathName = usePathname();

  // 2xl show sidebar player else show bottom drawer player?

  return (
    <div className="flex flex-col items-start lg:w-[15%] lg:min-w-fit h-svh bg-black border-r border-r-gray-700 p-8 gap-8 ">
      <ProjectsLogo />
      <div className="flex flex-col items-center justify-start w-full flex-1">
        <div className="flex flex-col w-full items-center gap-2">
          {paths.map((path, i) => {
            return (
              <ProjectsSidebarLink
                selected={pathName == path.path}
                key={i}
                href={path.path}
                name={path.name}
                icon={path.icon}
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-row items-center w-full justify-end">
        {/* doh*/}
      </div>
    </div>
  );
};

export default ProjectsSidebar;
