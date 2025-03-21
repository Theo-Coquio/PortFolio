"use client";
import { aboreto } from "@/fonts";

const AnimationStart = () => {
  return (
    <div
      className={`w-full h-full background flex flex-col items-center justify-center text-[200px] ${aboreto.className}`}
    >
      <h1 className="">PORTFOLIO</h1>
      <div className="bg-white h-2 w-[1100px] mb-20"></div>
      <button className="border border-white text-3xl px-20 py-5 tracking-widest">
        Scroll to reveal
      </button>
    </div>
  );
};

export default AnimationStart;
