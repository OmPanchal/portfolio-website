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

export const COLOURS = {
  blue: {
    on: "#3458eb",
    off: "#34baeb",
  },
  red: {
    on: "#e81c4f",
    off: "#e6839b",
  },
  yellow: {
    on: "#fcba03",
    off: "white",
  },
  purple: {
    on: "#ad07fa",
    off: "#d07ff5",
  },
};

export const POWER_UPS = [
  { type: "I", colour: COLOURS.blue, duration: 420, name: "Invincibility" },
  { type: "R", colour: COLOURS.red, duration: 420, name: "Rampage" },
  { type: "T", colour: COLOURS.yellow, duration: 300, name: "Triple Shot" },
  { type: "M", colour: COLOURS.purple, duration: 360, name: "Machine Gun" },
];
