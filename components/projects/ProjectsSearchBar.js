"use client";
import React, { useEffect, useState } from "react";
import projectsData from "./projects.json";
import ProjectsAuthorList from "./ProjectsAuthorList";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import logo from "./logo/logo-yellow.png";
import { useGlobals } from "@/context/GeneralContext";

const ProjectsSearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const { queue, queueIdx, setQueueIdx, setCurrentAlbum } = useGlobals();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (inputValue === "") {
      setFilteredResults([]);
    } else {
      setFilteredResults(
        projectsData.projects.filter((project) => {
          return project.name.toLowerCase().includes(inputValue.toLowerCase());
        }),
      );
    }
  }, [inputValue]);

  return (
    <div className="lg:w-[65%] w-full relative">
      <input
        onChange={(e) => {
          handleChange(e);
        }}
        value={inputValue}
        type="text"
        placeholder="Search Project"
        className={`bg-white/20 lg:p-6 p-4 lg:text-2xl text-sm outline-none rounded-2xl w-full ${filteredResults.length === 0 ? "" : "rounded-b-none"}`}
      />
      <div className="absolute black w-full bg-black z-20 flex flex-col rounded-b-2xl cursor-pointer overflow-auto no-scrollbar max-h-120">
        {filteredResults.map((project, idx) => {
          return (    
            <div
              className="flex flex-row items-center gap-4 bg-white/20 p-4 "
              key={idx}
              onClick={() => {
                setCurrentAlbum(projectsData.albums[0]);
                setQueueIdx(projectsData.projects.indexOf(project));
                setFilteredResults([]);
                setInputValue("");
              }}
            >
              <img src={project?.cover} className="lg:w-20 w-12 rounded-2xl" />
              <div className="w-full">
                <p className="lg:text-2xl font-bold">{project?.name}</p>
                <ProjectsAuthorList project={project} />
              </div>
              <div className="w-fit px-2">
                {queue[queueIdx] === project ? (
                  <Image
                    src={logo}
                    alt="playing"
                    className="w-20 rounded-full border border-white/40 animate-spin"
                  />
                ) : (
                  <FaPlay className="lg:size-6 size-4 mx-2" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsSearchBar;
