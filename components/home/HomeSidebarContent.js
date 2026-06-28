import Link from "next/link";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa6";
import { paths } from "@/utils/constants";
import { usePathname } from "next/navigation";
import BackgroundUnfocus from "../BackgroundUnfocus";
import HomeSidebarLink from "./HomeSidebarLink";

const HomeSidebarContent = ({ isHomeSidebarOpen, setIsHomeSidebarOpen }) => {
  const pathName = usePathname();

  return (
    <div>
      <BackgroundUnfocus
        state={isHomeSidebarOpen}
        setState={setIsHomeSidebarOpen}
        className="-z-20"
      />
      <div
        className={`${!isHomeSidebarOpen ? "opacity-0" : "opacity-100 md:w-130 md:h-[60%] w-full h-full rounded-none"} bg-white md:rounded-[36px] w-1 h-1 absolute md:right-6 md:top-6 right-0 top-0 md:p-0 p-6 transition-all duration-300 flex flex-col items-center justify-between -z-10`}
      >
        <div
          className={`flex-1 flex flex-col items-center gap-8 text-black justify-center ${isHomeSidebarOpen ? "scale-100" : "scale-0"} transition-all duration-300`}
        >
          {paths.map((path, i) => {
            return (
              <HomeSidebarLink
                href={path.path}
                key={i}
                selected={pathName == path.path}
              >
                {path.name}
              </HomeSidebarLink>
            );
          })}
        </div>
        <div className="p-10 flex flex-row w-full items-center justify-around">
          <a
            href="https://www.linkedin.com/in/panchal-om/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:-mt-5"
          >
            <FaLinkedin className="md:size-10 size-6" color="black" />
          </a>
          <a
            href="https://github.com/OmPanchal"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:-mt-5"
          >
            <FaGithub className="md:size-10 size-6" color="black" />
          </a>
          <a
            href="https://medium.com/@om_panchal"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:-mt-5"
          >
            <FaMedium className="md:size-10 size-6" color="black" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeSidebarContent;
