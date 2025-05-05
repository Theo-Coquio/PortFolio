"use client";

import React, { useEffect, useRef } from "react";
import "./hero.css";
import { bigShouldersDisplayBold } from "@/fonts";
import gsap from "gsap";
import heroStore from "../Store/useHeroStore";
import { observer } from "mobx-react-lite";

const Hero: React.FC = observer(() => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      heroStore.setHeroRef(heroRef);
    }
  }, []);

  useEffect(() => {
    gsap.from("#name span", {
      duration: 0.7,
      y: -100,
      opacity: 0,
      stagger: 0.08,
      ease: "power2.out",
      delay: 0.1,
    });
    gsap.from("#lastname span", {
      duration: 0.7,
      y: 100,
      opacity: 0,
      stagger: 0.08,
      ease: "power2.out",
    });
  }, []);

  return (
    <div
      ref={heroRef}
      className={`py-60 md:py-40 ${bigShouldersDisplayBold.className}   flex flex-col items-center justify-center text-[#E0F11F] z-0 
       
       `}
    >
      <div
        className="flex flex-row md:h-80 w-full justify-center items-start text-9xl md:text-[260px]"
        id="name"
      >
        <span>T</span>
        <span>H</span>
        <span>E</span>
        <span>O</span>
      </div>
      <div
        className="flex flex-row md:h-80 w-full justify-center items-end text-9xl md:text-[260px] pb-10 md:pb-20"
        id="lastname"
      >
        <span>C</span>
        <span>O</span>
        <span>Q</span>
        <span>U</span>
        <span>I</span>
        <span>O</span>
      </div>
      <div className="w-full h-full flex justify-center items-center ">
        <p className="text-2xl md:text-3xl">
          I&apos;m Theo - 20 yo Self-Taught Developer
        </p>
      </div>
    </div>
  );
});

export default Hero;
