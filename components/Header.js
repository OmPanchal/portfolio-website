"use client";
import HeaderLink from "./HeaderLink";
import { usePathname } from "next/navigation";
import { paths } from "@/utils/constants";

const Header = () => {
  const pathName = usePathname();

  return (
    <div className="absolute top-0 p-8 flex flex-row items-center gap-12 overflow-scroll max-w-full no-scrollbar">
      {paths.map((element, idx) => {
        return (
          <HeaderLink
            selected={pathName == element.path}
            key={idx}
            label={element.label}
            link={element.path}
          >
            {element.icon}
          </HeaderLink>
        );
      })}
    </div>
  );
};

export default Header;
