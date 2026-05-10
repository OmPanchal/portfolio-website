import TextImage from "./TextImage";
import Bordered from "./Bordered";
import Header from "./Header";
import SocialRack from "./SocialRack";
import Text from "./Text";
import { IoCodeSlashSharp, IoHomeOutline } from "react-icons/io5";
import Link from "next/link";
import { FaCode } from "react-icons/fa";
import { PiBird } from "react-icons/pi";

export default function Home() {
  return (
    <Bordered className="bg-black flex flex-1 gap-8 items-center justify-center flex-col lg:m-30 lg:mx-40 md:m-20 m-5 p-10 relative">
      <div className="absolute top-0 p-8 flex flex-row items-center gap-12 overflow-scroll max-w-full">
        <Link
          href="/"
          className="flex flex-row items-center justify-start w-full gap-2"
        >
          <IoHomeOutline />
          <Text className="underline text-[20px]" weight="b">
            HOME
          </Text>
        </Link>
        <Link
          href="/"
          className="flex flex-row items-center justify-start w-full gap-2"
        >
          <PiBird />
          <Text className="underline text-[20px]">ABOUT_ME</Text>
        </Link>
        <Link
          href="/"
          className="flex flex-row items-center justify-start w-full gap-2"
        >
          <IoCodeSlashSharp />
          <Text className="underline text-[20px]">PROJECTS</Text>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center gap-8 w-fit relative">
        <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-8 gap-1">
          {/* <TextImage /> */}
          <div className="flex flex-col items-center gap-1">
            <Header>Om_Panchal</Header>
            <SocialRack />
          </div>
        </div>
        <Text className="lg:max-w-180 max-w-150">Welcome to my website!!!</Text>
      </div>
    </Bordered>
  );
}
