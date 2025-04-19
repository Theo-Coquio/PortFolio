import React from "react";

interface Props {
  title: string;
  percentage: number;
}

const SkillsComponents: React.FC<Props> = ({ title, percentage }) => {
  return (
    <div className="bg-[#E0F11F] flex flex-row px-4 py-6 w-full h-36 rounded-lg items-center">
      <div className="flex-1 h-full flex items-center justify-center ">
        <h1 className="text-3xl text-[#121212]">{title}</h1>
      </div>
      <span className="h-10 w-[2px] rounded-full bg-[#A1AD1B]"></span>
      <div className="flex-1 h-full text-6xl flex justify-center items-center text-[#A1AD1B] ">
        {percentage}%
      </div>
    </div>
  );
};

export default SkillsComponents;
