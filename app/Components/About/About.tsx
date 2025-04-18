import { bigShouldersDisplayBold } from "@/fonts";
import React from "react";

const About = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex flex-row items-center gap-4">
        <h1
          className={`text-[#E0F11F] text-3xl ${bigShouldersDisplayBold.className}`}
        >
          ABOUT
        </h1>
        <div className="h-[3px] w-full bg-[#404040] rounded-full"></div>
      </div>
    </div>
  );
};

export default About;
