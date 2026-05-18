import React from "react";
import Bordered from "../components/Bordered";
import Text from "./Text";

const Project = ({ name, description, link, date, skills }) => {
  return (
    <Bordered className="flex flex-col max-h-full">
      <Bordered className="flex flex-col items-center gap-5 px-4 py-2">
        <a href={link} className="font-[space-mono-b] underline">
          <Text weight="r">{name}</Text>
        </a>
        <Text weight="r">{description}</Text>
      </Bordered>
      <div className="flex overflow-scroll flex-row gap-4 items-center justify-center py-2 w-full text-wrap no-scrollbar">
        {skills.split(" ").map((element, idx) => {
          return (
            <Text weight="r" key={idx}>
              ~{element}~
            </Text>
          );
        })}
      </div>
    </Bordered>
  );
};

export default Project;
