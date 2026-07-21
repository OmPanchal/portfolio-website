import { paths } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AboutSidebar = () => {
  const pathName = usePathname();

  return (
    <div className="display flex flex-col items-start justify-center gap-8 text-5xl font-[HyperSpace] fixed h-full left-0 mx-10 font-light">
      {paths.map((path, idx) => {
        return (
          <Link
            href={path.path}
            key={idx}
            className={`${path.path === pathName && "font-bold text-6xl"} hover:font-bold hover:text-6xl`}
          >
            {path.name}
          </Link>
        );
      })}
    </div>
  );
};

export default AboutSidebar;
