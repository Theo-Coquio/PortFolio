import { aboreto } from "@/fonts";
import React from "react";

const AnimationStart = () => {
  return (
    <div
      className={`w-full h-full bg-black flex flex-col items-center justify-center text-[200px] ${aboreto.className}`}
    >
      <h1 className="">PORTFOLIO</h1>
      <div className="bg-white h-2 w-[1100px] mb-20"></div>
      <button className="border border-white text-3xl px-20 py-5 tracking-widest">
        Enter
      </button>
    </div>
  );
};

export default AnimationStart;
