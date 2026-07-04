"use client";
import { useGlobals } from "@/context/GeneralContext";

const ProjectsPlayer = () => {
  const { isProjectsPlayerOpen, setIsProjectsPlayerOpen } = useGlobals();

  return (
    <div
      className={`lg:relative absolute lg:h-svh lg:w-[40%] w-full h-full bg-red-600 z-10 duration-300 transition-all ${isProjectsPlayerOpen ? "bottom-0" : "lg:bottom-0 -bottom-full"} `}
    >
      <button
        className="lg:scale-0 scale-100"
        onClick={() => {
          setIsProjectsPlayerOpen(false);
        }}
      >
        close
      </button>
    </div>
  );
};

export default ProjectsPlayer;
