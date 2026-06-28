"use client";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import HomeSidebarContent from "./HomeSidebarContent";

const HomeSidebar = () => {
  const [isHomeSidebarOpen, setIsHomeSidebarOpen] = useState(false);

  return (
    <div className="w-fit h-fit z-10">
      <button
        onClick={() => {
          setIsHomeSidebarOpen(!isHomeSidebarOpen);
        }}
        className="p-4 hover:invert bg-white rounded-full cursor-pointer transition-all duration-300 z-999"
      >
        {isHomeSidebarOpen ? (
          <RxCross2
            className={`md:size-10 size-6 transition-all duration-300 ${
              isHomeSidebarOpen ? "scale-100" : "scale-0"
            }`}
            color="black"
          />
        ) : (
          <LuMenu
            className={`md:size-10 size-6 transition-all duration-300 ${isHomeSidebarOpen ? "scale-0" : "scale-100"}`}
            color="black"
          />
        )}
      </button>
      <HomeSidebarContent
        isHomeSidebarOpen={isHomeSidebarOpen}
        setIsHomeSidebarOpen={setIsHomeSidebarOpen}
      />
    </div>
  );
};

export default HomeSidebar;
