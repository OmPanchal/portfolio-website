import { IoCodeSlashSharp, IoHomeOutline } from "react-icons/io5";
import { PiBird } from "react-icons/pi";
import { generatePathDetails } from "./functions";

export const paths = [
  generatePathDetails("/", <IoHomeOutline />, "HOME"),
  generatePathDetails("/aboutme", <PiBird />, "ABOUT_ME"),
  generatePathDetails("/projects", <IoCodeSlashSharp />, "PROJECTS"),
];
