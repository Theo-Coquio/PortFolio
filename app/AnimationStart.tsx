"use client";
import { aboreto } from "@/fonts";
import React, { useEffect } from "react";
import gsap from "gsap";

const AnimationStart = () => {
  useEffect(() => {
    const chars = document.querySelectorAll(".portfolio-char");

    gsap.set(chars, { autoAlpha: 1 });

    gsap.from(chars, {
      duration: 1,
      y: 100,
      autoAlpha: 0,
      stagger: 0.1,
    });

    chars.forEach((char) => {
      gsap.to(char, {
        duration: 2 + Math.random(), // Random duration between 2 and 3 seconds
        y: -20 + Math.random() * 40, // Random y position between -20 and 20
        x: -10 + Math.random() * 20, // Random x position between -10 and 10
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });

    // Floating effect
    chars.forEach((char) => {
      gsap.to(char, {
        duration: 3 + Math.random() * 2, // Random duration between 3 and 5 seconds
        y: "+=10", // Move down by 10px
        x: "+=5", // Move right by 5px
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  const portfolio = "PORTFOLIO";

  return (
    <div
      className={`w-full h-full bg-black flex flex-col items-center justify-center text-[200px] ${aboreto.className}`}
    >
      <h1 className="">
        {portfolio.split("").map((letter, index) => (
          <span key={index} className="portfolio-char">
            {letter}
          </span>
        ))}
      </h1>
      <div className="bg-white h-2 w-[1100px] mb-20"></div>
      <button className="border border-white text-3xl px-20 py-5 tracking-widest">
        Enter
      </button>
    </div>
  );
};

export default AnimationStart;
