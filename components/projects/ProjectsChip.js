import React from "react";

const ProjectsChip = ({ colour, children, ...props }) => {
  const colours = {
    green: "bg-green-500/20 border-green-500/30 text-green-500",
    white: "bg-white/10 border-white/30 text-white",
  };

  return (
    <div
      className={`lg:text-xl cursor-pointer font-thin text-xs lg:px-6 px-4 lg:py-4 py-2 border-2 rounded-full min-w-max select-none ${colours[colour]}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default ProjectsChip;
