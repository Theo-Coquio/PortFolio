"use client";
import { herrVonMuellerhoff } from "@/fonts";
import React, { useRef } from "react";
import Menu from "../Menu/Menu";

const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        ref={headerRef}
        className={`w-full h-32 pt-16 flex flex-row items-center justify-between fixed z-50 bg-(--background) px-[500px]
         
        }`}
      >
        <button
          ref={buttonRef}
          onClick={handleMenuClick}
          className="flex flex-col gap-2 hover:cursor-pointer  "
        >
          <div className="h-[2px] w-9 rounded-xl bg-white"></div>
          <div className="h-[2px] w-7 rounded-xl bg-white"></div>
          <div className="h-[2px] w-5 rounded-xl bg-white"></div>
        </button>
        <h1 className={`text-6xl relative ${herrVonMuellerhoff.className}`}>
          Portfolio
          <span className="bg-white rounded-full h-[2px] absolute top-1/2 left-1 "></span>
        </h1>
        <button className="text-lg bg-white text-black py-2 px-7 rounded-full">
          Contact
        </button>
      </div>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} headerRef={headerRef} />
    </>
  );
};

export default Header;
