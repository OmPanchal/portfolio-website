"use client";
import { useGlobals } from "@/context/GeneralContext";
import HorizontalScroll from "../HorizontalScroll";
import ProjectsAuthorList from "./ProjectsAuthorList";
import { FaPlay } from "react-icons/fa";
import logo from "./logo/logo-yellow.png";
import Image from "next/image";
import projectsData from "./projects.json";

const ProjectsSelector = () => {
  const {
    projects,
    currentProject,
    albums,
    setQueueIdx,
    queue,
    setIsQueueTabOpen,
    currentAlbum,
    queueIdx,
    setCurrentAlbum,
  } = useGlobals();

  return (
    <div className="max-h-full flex-1 max-w-full flex flex-col items-start justify-start">
      <div className="lg:p-12 p-6 flex w-full flex-col lg:gap-8 gap-4 relative">
        <p className="lg:text-4xl text-xl font-bold">Featured Projects</p>
        <HorizontalScroll className="flex flex-row max-w-full overflow-x-auto lg:gap-8 gap-4 no-scrollbar">
          {projects.map((project, idx) => {
            return (
              <div
                className="flex flex-col shrink-0 items-start justify-around lg:gap-4 gap-2 lg:w-84 w-32 cursor-pointer group relative"
                key={idx}
                onClick={() => {
                  setCurrentAlbum(projectsData.albums[0]);
                  setQueueIdx(projectsData.projects.indexOf(project));
                }}
              >
                {queue[queueIdx] === project &&
                currentAlbum.name === "Featured Projects" ? (
                  <div className="absolute top-0 lg:mt-2 mt-3 left-0 lg:w-84 w-32 lg:h-84 h-32 flex flex-row items-center justify-center bg-black/30">
                    <Image
                      src={logo}
                      alt="playing"
                      className="lg:size-28 size-14 animate-spin"
                    />
                  </div>
                ) : (
                  <div className="absolute top-0 left-0 lg:w-84 w-32 lg:h-84 h-32 bg-black/30 opacity-0 group-hover:opacity-100 transition-all flex flex-row items-center justify-center lg:mt-2 mt-1.5">
                    <FaPlay className="size-12 text-white/80" />
                  </div>
                )}
                <img
                  src={project?.cover}
                  className="lg:w-84 w-32 rounded-2xl"
                />
                <div className="flex flex-col gap-2">
                  <p className="lg:text-2xl text-base text-white font-bold">
                    {project?.name}
                  </p>
                  <ProjectsAuthorList project={project} />
                </div>
              </div>
            );
          })}
        </HorizontalScroll>
      </div>
      <div className="lg:p-12 p-6 flex w-full flex-col lg:gap-8 gap-4 relative">
        <p className="lg:text-4xl text-xl font-bold">Albums</p>
        <HorizontalScroll className="flex flex-row max-w-full overflow-x-auto lg:gap-8 gap-4 no-scrollbar">
          {albums.slice(1, albums.length).map((album, idx) => {
            return (
              <div
                className="flex flex-col shrink-0 items-start justify-around lg:gap-4 gap-2 lg:w-84 w-32 cursor-pointer group relative"
                key={idx}
                onClick={() => {
                  setIsQueueTabOpen(true);
                  setCurrentAlbum(album);
                }}
              >
                {currentAlbum.name === album.name ? (
                  <div className="absolute top-0 left-0 lg:w-84 w-32 lg:h-84 h-32 flex flex-row items-center justify-center bg-black/30">
                    <Image
                      src={logo}
                      alt="playing"
                      className="lg:size-28 size-14 animate-spin"
                    />
                  </div>
                ) : (
                  <div className="absolute top-0 left-0 lg:w-84 w-32 lg:h-84 h-32 bg-black/30 opacity-0 group-hover:opacity-100 transition-all flex flex-row items-center justify-center">
                    <FaPlay className="size-12 text-white/80" />
                  </div>
                )}
                <img src={album?.cover} className="lg:w-84 w-32 rounded-2xl" />
                <div className="flex flex-col gap-2">
                  <p className="lg:text-2xl text-base text-white font-bold">
                    {album?.name}
                  </p>
                  <ProjectsAuthorList project={album} />
                </div>
              </div>
            );
          })}
        </HorizontalScroll>
      </div>
    </div>
  );
};

export default ProjectsSelector;
