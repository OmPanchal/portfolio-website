import Image from "next/image";
import TextImage from "./TextImage";
import Bordered from "./Bordered";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import Project from "./Project";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* HEADER */}
      <div className="p-2 flex flex-row items-center gap-8">
        <div className="flex flex-col items-center w-[60%]">
          <TextImage />
        </div>
        <div className="flex flex-col items-center w-[30%]">
          <h1>Om_Panchal</h1>
          <div className="flex flex-row items-center justify-center gap-2 w-full">
            <a href="https://github.com/OmPanchal">
              <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/panchal-om/">
              <FaLinkedin size={28} />
            </a>
            <a href="https://medium.com/@om_panchal">
              <FaMedium size={28} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-2 flex flex-col gap-4 items-center lg:w-[40%] w-[75%]">
        {/* PROJECTS */}
        {/* <div className="border w-full"></div> */}
        <p>
          I am a first year Computer Science student at the University of
          Warwick. I like coding things from scratch and doing maths. I play
          badminton and do origami.
        </p>
        <div className="border w-full"></div>
        <p>
          <u>My Projects</u>
        </p>
        <Project
          name="bren"
          description="A simple numpy based neural network library inspired by Tensorflow/Keras"
          link="https://pypi.org/project/bren/"
          date="07/08/2023"
          skills="python numpy tensorflow keras neural_networks"
        />
        <Project
          name="AlexNet using tensorflow"
          description="AlexNet using tensorflow and keras in python"
          link="https://github.com/OmPanchal/AlexNet-using-tensorflow"
          date="20/10/2023"
          skills="python numpy automatic_differentiation binary_trees"
        />
        <Project
          name="Autodiff"
          description="A Simple Automatic Differentiation Library | A library that algorithmically calculates derivatives | Differentiation Calculator"
          link="https://pypi.org/project/python-autodiff/"
          date="07/09/2025"
          skills="python numpy automatic_differentiation binary_trees"
        />
      </div>
    </div>
  );
}
