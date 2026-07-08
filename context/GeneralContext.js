"use client";
import { createContext, useContext, useEffect, useState } from "react";
import projectsData from "../components/projects/projects.json";

const getProject = (name, projects) => {
  /* */
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].name === name) {
      return projects[i];
    }
  }
};

const GeneralContext = createContext();

export const GeneralProvider = ({ children }) => {
  const [isProjectsSidebarOpen, setIsProjectsSidebarOpen] = useState(false);
  const [isProjectsPlayerOpen, setIsProjectsPlayerOpen] = useState(false);

  const actualProjectsArray = projectsData.projects || [];
  const actualAlbumsArray = projectsData.albums || [];

  const [projects, setProjects] = useState(actualProjectsArray);

  const [currentAlbum, setCurrentAlbum] = useState(undefined);
  const [queue, setQueue] = useState([]);
  const [queueIdx, setQueueIdx] = useState(0);

  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    if (actualAlbumsArray.length > 0) {
      for (let i = 0; i < actualAlbumsArray.length; i++) {
        if (actualAlbumsArray[i].name === "Featured Projects") {
          setCurrentAlbum(actualAlbumsArray[i]);
        }
      }
    }
  }, []);

  useEffect(() => {
    if (currentAlbum != undefined && currentAlbum.length !== 0) {
      let tmp = [];
      for (let i = 0; i < currentAlbum.projects.length; i++) {
        tmp.push(getProject(currentAlbum.projects[i], projects));
      }
      setQueue(tmp);

      if (tmp.length > 0) {
        setQueueIdx(0);
        setCurrentProject(tmp[0]);
      }
    }
  }, [currentAlbum]);

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
  };
  return (
    <GeneralContext.Provider value={obj}>{children}</GeneralContext.Provider>
  );
};

export const useGlobals = () => useContext(GeneralContext);
