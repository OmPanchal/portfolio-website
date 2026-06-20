import Header from "@/components/Header";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 h-full w-full items-center">
      <Header />
      <div className="h-full flex-1 w-full flex flex-col text-center items-center justify-center">
        <h1 className="md:text-5xl text-2xl p-8">Welcome to my website.</h1>
        <h1 className="md:text-5xl text-2xl md:p-8 sm:max-w-[50%] max-w-full md:-mt-8 -mt-4">
          I am a UK based Programmer studying Computer Science at the{" "}
          <label className="text-[#a499f5]">University of Warwick</label> ,
          interested in Maths and CS based Problem Solving.
        </h1>
      </div>
      <Link
        href="/aboutme"
        className="flex flex-row p-4 gap-4 items-center justify-between hover:-mr-5 transition-all"
      >
        <h1 className="md:text-4xl text-2xl">About me</h1>
        <FaLongArrowAltRight className="md:size-10 size-6 mt-1" />
      </Link>
    </div>
  );
}
