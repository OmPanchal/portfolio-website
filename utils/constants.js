import { IoCodeSlashSharp, IoHomeOutline } from "react-icons/io5";
import { PiBird } from "react-icons/pi";
import { generatePathDetails } from "./functions";
import { CiHome, CiMusicNote1, CiUser } from "react-icons/ci";

export const paths = [
  { name: "Home", path: "/", icon: <CiHome size={42} /> },
  { name: "About me", path: "/aboutme", icon: <CiUser size={42} /> },
  { name: "Projects", path: "/projects", icon: <CiMusicNote1 size={42} /> },
];
