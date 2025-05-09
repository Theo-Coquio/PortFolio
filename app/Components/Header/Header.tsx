"use client";
import { herrVonMuellerhoff } from "@/fonts";
import React, { useEffect, useRef } from "react";
import Menu from "../Menu/Menu";
import Image from "next/image";

const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      <div
        ref={headerRef}
        className={`w-full h-32 pt-16 flex flex-row items-center justify-between fixed z-50 bg-(--background) md:px-[500px] px-10         
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
        <h1
          ref={titleRef}
          className={`text-5xl md:text-6xl relative md:ml-16 ml-10 ${herrVonMuellerhoff.className}`}
        >
          Portfolio
          <span className="bg-white rounded-full h-[2px] absolute top-1/2 left-1 "></span>
        </h1>

        <button className="text-lg  text-black py-2 px-7 rounded-full">
          <Image src="/email.svg" alt="Download" width={30} height={30} />
        </button>
      </div>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} headerRef={headerRef} />
    </>
  );
};

export default Header;
