"use client";
import HeaderLink from "./HeaderLink";
import { usePathname } from "next/navigation";
import { paths } from "@/utils/constants";

const Header = () => {
  const pathName = usePathname();

  return (
    <div className="flex flex-row w-full justify-around bg-black items-center overflow-scroll no-scrollbar p-4 mb-4 gap-4">
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
