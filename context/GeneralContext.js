"use client";
import { createContext, useContext, useEffect, useState } from "react";
import projectsData from "../components/projects/projects.json";

const GeneralContext = createContext();

const getProject = (project, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === project) {
      return arr[i];
    }
  }
};

export const GeneralProvider = ({ children }) => {
  const [isProjectsSidebarOpen, setIsProjectsSidebarOpen] = useState(false);
  const [isProjectsPlayerOpen, setIsProjectsPlayerOpen] = useState(false);

  const [isQueueTabOpen, setIsQueueTabOpen] = useState(false);
  const [isInformationTabOpen, setIsInformationTabOpen] = useState(false);

  const actualProjectsArray = projectsData.projects || [];
  const actualAlbumsArray = projectsData.albums || [];

  const [projects, setProjects] = useState(actualProjectsArray);
  const [albums, setAlbums] = useState(actualAlbumsArray);

  const [currentAlbum, setCurrentAlbum] = useState(actualAlbumsArray[0]);
  const [queue, setQueue] = useState(actualProjectsArray);
  const [queueIdx, setQueueIdx] = useState(0);

  const [currentProject, setCurrentProject] = useState(actualProjectsArray[0]);

  useEffect(() => {
    setCurrentProject(queue[queueIdx]);
  }, [queueIdx]);

  useEffect(() => {
    if (
      currentAlbum.name === "Featured Projects" &&
      currentAlbum !== undefined &&
      actualProjectsArray !== undefined
    ) {
      setQueue(projectsData.projects);
    } else {
      let tmp = [];
      for (let i = 0; i < currentAlbum.projects.length; i++) {
        let project = currentAlbum.projects[i];
        tmp.push(getProject(project, actualProjectsArray));
      }
      setQueue(tmp);
      setQueueIdx(0);
    }
  }, [currentAlbum]);

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
    albums,
    setAlbums,
  };
  return (
    <GeneralContext.Provider value={obj}>{children}</GeneralContext.Provider>
  );
};

export const useGlobals = () => useContext(GeneralContext);
