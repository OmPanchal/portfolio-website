import Link from "next/link";
import React from "react";

const ProjectsSidebarLink = ({
  href,
  name,
  icon,
  selected = false,
  children,
  ...props
}) => {
  return (
    <Link
      className={`p-4 text-[24px] rounded-2xl hover:text-gray-200 text-center flex-1 flex w-full flex-row items-center justify-start gap-4 cursor-pointer font-light ${selected ? " text-gray-200 bg-white/10 " : "text-gray-400"}`}
      href={href}
    >
      <div>{icon}</div>
      {name}
    </Link>
  );
};

export default ProjectsSidebarLink;
