// import { herrVonMuellerhoff } from "@/fonts";
import React from "react";
import Menu from "../Menu/Menu";

const Header = () => {
  return (
    <>
      {/* <div className="w-full h-32 px-[500px] pt-16 flex flex-row items-center justify-between fixed z-10 bg-(--background)">
        <button className="flex flex-col gap-2">
          <div className="h-[2px] w-9 rounded-xl bg-white"></div>
          <div className="h-[2px] w-7 rounded-xl bg-white"></div>
          <div className="h-[2px] w-5 rounded-xl bg-white"></div>
        </button>
        <h1 className={`text-6xl ${herrVonMuellerhoff.className}`}>
          Portfolio
        </h1>
        <button className="text-lg bg-white text-black py-2 px-7 rounded-full">
          Contact
        </button>
      </div> */}
      <Menu />
    </>
  );
};

export default Header;
