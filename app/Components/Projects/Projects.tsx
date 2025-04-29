import { bigShouldersDisplayBold } from "@/fonts";
import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-row  gap-10 w-full items-center h-screen mt-20">
      <h1
        className={`text-[#E0F11F] text-3xl ${bigShouldersDisplayBold.className}`}
      >
        PROJECTS
      </h1>
      <div className="h-[3px] w-full bg-[#404040] rounded-full"></div>
    </div>
  );
};

export default Projects;
