"use client";

import React, { useEffect } from "react";
import "./hero.css";
import { bigShouldersDisplayBold } from "@/fonts";
import gsap from "gsap";

const Hero = () => {
  useEffect(() => {
    gsap
      .timeline()
      .from("#name span", { duration: 0.5, y: -100, opacity: 0, stagger: 0.1 })
      .from("#lastname span", {
        duration: 0.5,
        y: -100,
        opacity: 0,
        stagger: 0.1,
      });
  }, []);

  return (
    <div
      className={` px-[500px] py-20 ${bigShouldersDisplayBold.className}  flex flex-col items-center justify-center text-[#E0F11F] `}
    >
      <div
        className="flex flex-row h-80 w-full justify-center items-start text-[260px]"
        id="name"
      >
        <span>T</span>
        <span>H</span>
        <span>E</span>
        <span>O</span>
      </div>
      <div
        className="flex flex-row h-80 w-full justify-center items-end text-[260px]"
        id="lastname"
      >
        <span>C</span>
        <span>O</span>
        <span>Q</span>
        <span>U</span>
        <span>I</span>
        <span>O</span>
      </div>
      <p className="text-3xl">I&apos;m Theo - 20 years old react developer</p>
    </div>
  );
};

export default Hero;
