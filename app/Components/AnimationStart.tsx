"use client";
import { aboreto } from "@/fonts";
import React, { useEffect } from "react";
import gsap from "gsap";

const AnimationStart = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const xPercent = (clientX / width) * 100;
      const yPercent = (clientY / height) * 100;

      const gradient = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(255,255,255,0.8), rgba(0,123,255,0.2))`;

      gsap.to(".background", {
        background: gradient,
        duration: 0.5,
        ease: "power1.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`w-full h-full background flex flex-col items-center justify-center text-[200px] ${aboreto.className}`}
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
