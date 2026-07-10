import React from "react";
import { IoMdClose } from "react-icons/io";

const ProjectsPlayerTab = ({ headerTitle, state, setState, children }) => {
  return (
    <div
      className={`absolute flex flex-col justify-start gap-8 bg-black lg:text-2xl text-xs font-light lg:p-16 p-10 z-20 w-full h-full transition-all ${state ? "bottom-0" : "-bottom-full"} max-h-full overflow-auto no-scrollbar`}
    >
      <div className="flex flex-row items-center text-4xl font-bold justify-between w-full">
        {headerTitle}
        <IoMdClose
          className="lg:size-8 size-6 cursor-pointer"
          onClick={() => {
            setState(false);
          }}
        />
      </div>
      {children}
    </div>
  );
};

export default ProjectsPlayerTab;
