import React from "react";
import Header from "../../components/Header";
import PageBorder from "../../components/PageBorder";
import Project from "@/components/Project";

const Projects = () => {
  return (
    <PageBorder>
      <div className="flex flex-col flex-1 overflow-scroll no-scrollbar">
        <Header />
        <div className="w-full p-10 h-full grid gap-4 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-1">
          <Project
            name="BREN"
            description="bren is a custom numpy based library, powered by automatic differentiation, inspired by Tensorflow/Keras, which allows users to build small scale simple neural networks. It's analogous yet simpler design to the Keras API allows users to produce, train and save their own models, with custom components, without having to learn an entirely new structure. 
            
            bren is part of a sequence of neural network from scratch projects and a successor to the neural-network-from-scratch-v2, with one major update being the integration of automatic differentitation. Automatic differentiation allows for the real-time determination of derivatives during backpropagation (through the use of computation graphs produced by br.autodiff and br.Variable) and reduces the need for users to couple mathematical computation with pre-written derivatives as was required in the previous projects."
            link="https://pypi.org/project/bren/"
            skills="python numpy deep_learning"
          />
          <Project
            name="AUTODIFF"
            description="A Simple Automatic Differentiation Library | A library that algorithmically calculates derivatives | Differentiation Calculator "
            link="https://pypi.org/project/python-autodiff/"
            skills="python numpy auto_diff binary_trees"
          />
        </div>
      </div>
    </PageBorder>
  );
};

export default Projects;
