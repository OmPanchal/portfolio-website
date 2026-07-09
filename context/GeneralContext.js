"use client";
import { createContext, useContext, useEffect, useState } from "react";
import projectsData from "../components/projects/projects.json";

const GeneralContext = createContext();

export const GeneralProvider = ({ children }) => {
  const [isProjectsSidebarOpen, setIsProjectsSidebarOpen] = useState(false);
  const [isProjectsPlayerOpen, setIsProjectsPlayerOpen] = useState(false);

  const [isQueueTabOpen, setIsQueueTabOpen] = useState(false);
  const [isInformationTabOpen, setIsInformationTabOpen] = useState(false);

  const actualProjectsArray = projectsData.projects || [];
  const actualAlbumsArray = projectsData.albums || [];

  const [projects, setProjects] = useState(actualProjectsArray);

  const [currentAlbum, setCurrentAlbum] = useState(actualAlbumsArray[0]);
  const [queue, setQueue] = useState(actualProjectsArray);
  const [queueIdx, setQueueIdx] = useState(0);

  const [currentProject, setCurrentProject] = useState(actualProjectsArray[0]);

  useEffect(() => {
    setCurrentProject(queue[queueIdx]);
  }, [queueIdx]);

  const obj = {
    isProjectsSidebarOpen,
    setIsProjectsSidebarOpen,
    isProjectsPlayerOpen,
    setIsProjectsPlayerOpen,
    projects,
    setProjects,
    currentProject,
    setCurrentProject,
    currentAlbum,
    setCurrentAlbum,
    queueIdx,
    setQueueIdx,
    queue,
    setQueue,
    isQueueTabOpen,
    setIsQueueTabOpen,
    isInformationTabOpen,
    setIsInformationTabOpen,
  };
  return (
    <GeneralContext.Provider value={obj}>{children}</GeneralContext.Provider>
  );
};

export const useGlobals = () => useContext(GeneralContext);
