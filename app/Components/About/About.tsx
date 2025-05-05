import { bigShouldersDisplayBold } from "@/fonts";
import React from "react";
import SkillsComponents from "./SkillsComponents";
import { about } from "@/app/DataComponents/DataAbout";

const About = () => {
  return (
    <div className="w-full h-full flex flex-col  pb-40">
      <div className="flex flex-row items-center gap-10">
        <h1
          className={`text-[#E0F11F] text-3xl ${bigShouldersDisplayBold.className}`}
        >
          {about.intro.title}
        </h1>
        <div className="h-[3px] w-full bg-[#404040] rounded-full"></div>
      </div>
      <div className="flex flex-row gap-10 mt-10 ">
        <div className="flex-1 text-[#404040] flex flex-col gap-10">
          <h1 className="text-xl">{about.intro.heading}</h1>
          <p>{about.intro.description}</p>
          <div className="flex flex-row items-center gap-10">
            <h1
              className={`text-[#E0F11F] text-2xl ${bigShouldersDisplayBold.className}`}
            >
              {about.brief.heading}
            </h1>
            <div className="h-[3px] w-76 bg-[#404040] rounded-full"></div>
          </div>
          <ul className="list-disc list-inside">
            {about.brief.points.map((point, index) => (
              <li key={index} className="text-lg text-[#404040]">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 flex flex-col gap-8">
          <h1 className="text-[#404040] text-xl">{about.spe.heading}</h1>
          {about.spe.skills.map((skill, index) => (
            <SkillsComponents
              key={index}
              title={skill.title}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
