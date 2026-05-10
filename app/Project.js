import React from "react";
import Bordered from "./Bordered";

const Project = ({ name, description, link, date, skills }) => {
  return (
    <Bordered className="flex flex-col p-0 w-full">
      <Bordered className="flex flex-row items-center gap-5 px-4 py-2">
        <div>
          <a href={link} className="font-[space-mono-b]">
            <u>{name}</u>
          </a>
          <p>{date}</p>
        </div>
        <p>{description}</p>
      </Bordered>
      <div className="flex flex-row gap-4 items-center justify-center py-2 w-full text-wrap">
        {skills.split(" ").map((element, idx) => {
          return <p key={idx}>~{element}~</p>;
        })}
      </div>
    </Bordered>
  );
};

export default Project;
