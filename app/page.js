import TextImage from "./TextImage";
import Bordered from "./Bordered";
import Header from "./Header";
import SocialRack from "./SocialRack";
import Text from "./Text";
import { IoCodeSlashSharp } from "react-icons/io5";
import Link from "next/link";

export default function Home() {
  return (
    <Bordered className="bg-black flex flex-1 gap-8 items-center justify-between flex-col lg:m-30 lg:mx-40 md:m-20 m-5 p-5">
      <Link
        href="/"
        className="flex flex-row items-center justify-start w-full"
      >
        <Text className="underline text-[20px]">HOME</Text>
      </Link>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col items-center justify-center md:flex-row md:gap-8 gap-2">
          <TextImage />
          <div className="flex flex-col items-center gap-1">
            <Header>Om_Panchal</Header>
            <SocialRack />
          </div>
        </div>
        <Text className="lg:max-w-175 max-w-150">
          I am a first year Computer Science student at the University of
          Warwick. I like programming things from scratch and doing maths. I
          play badminton and do origami.
        </Text>
      </div>
      <Link
        href="/projects"
        className="flex flex-row items-center gap-2 justify-end w-full"
      >
        <Text className="underline text-[20px]">MY_PROJECTS</Text>
        <IoCodeSlashSharp size={23} />
      </Link>
    </Bordered>
  );
}
