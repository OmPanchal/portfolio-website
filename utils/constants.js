import { IoCodeSlashSharp, IoHomeOutline } from "react-icons/io5";
import { PiBird } from "react-icons/pi";
import { generatePathDetails } from "./functions";
import { CiHome, CiMusicNote1, CiUser } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

export const paths = [
  {
    name: "Home",
    path: "/",
    projectsIcon: <CiHome className="lg:size-10 size-6" />,
  },
  {
    name: "About me",
    path: "/aboutme",
    projectsIcon: <CiUser className="lg:size-10 size-6" />,
  },
  {
    name: "Projects",
    path: "/projects",
    projectsIcon: <CiMusicNote1 className="lg:size-10 size-6" />,
  },
];

export const projectsIcons = {
  github: <FaGithub className="lg:size-12 size-6" />,
  other: <FaLink className="lg:size-12 size-6" />,
};
