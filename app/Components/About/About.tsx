import { bigShouldersDisplayBold } from "@/fonts";
import React from "react";
import SkillsComponents from "./SkillsComponents";

const About = () => {
  return (
    <div className="w-full h-screen flex flex-col  ">
      <div className="flex flex-row items-center gap-10">
        <h1
          className={`text-[#E0F11F] text-3xl ${bigShouldersDisplayBold.className}`}
        >
          ABOUT
        </h1>
        <div className="h-[3px] w-full bg-[#404040] rounded-full"></div>
      </div>
      <div className="flex flex-row gap-10 mt-10">
        <div className="flex-1 text-[#404040] flex flex-col gap-4">
          <h1 className="text-xl">How did I discovered Coding ?</h1>
          <p>
            {" "}
            It all started at school, where I learned the basics of programming,
            starting with HTML and CSS! It all started there, and I loved it
            instantly. Unfortunately, that course didn&apos;t last and
            programming fell into darkness in favour of the rest of my school
            year. But one day, by chance, YouTube gave me the most wonderful
            recommendation Since then, web development has become an obvious
            choice for me
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-8">
          <h1>What am i specialized to</h1>
          <SkillsComponents title="NextJs" percentage={8} />
          <SkillsComponents title="TypeScript" percentage={1} />
          <SkillsComponents title="Tailwind" percentage={120} />
        </div>
      </div>
    </div>
  );
};

export default About;
