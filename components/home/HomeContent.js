import Link from "next/link";
import HomeHeader from "./HomeHeader";
import { MdArrowRightAlt } from "react-icons/md";

const HomeContent = () => {
  return (
    <div className="select-none flex flex-col flex-1 h-full w-full items-center p-6">
      <HomeHeader />
      <div className="h-full flex-1 w-full flex flex-col text-center items-center justify-center">
        <h1 className="md:text-5xl text-2xl p-8">Welcome to my website.</h1>
        <h1 className="md:text-5xl text-2xl p-8 md:max-w-[50%] max-w-full -mt-8">
          I am a UK based Programmer studying Computer Science at the{" "}
          <span className="text-[#a499f5]">University of Warwick</span>,
          interested in Maths and CS based Problem Solving.
        </h1>
      </div>
      <Link
        href="/aboutme"
        className="flex flex-row p-4 gap-2 items-center justify-between hover:-mr-5 transition-all"
      >
        <h1 className="md:text-4xl text-xl">About me</h1>
        <MdArrowRightAlt className="md:size-10 size-6 mt-1" />
      </Link>
    </div>
  );
};

export default HomeContent;
