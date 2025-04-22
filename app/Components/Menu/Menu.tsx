"use client";

import React, { useEffect } from "react";
import gsap from "gsap";

const Menu = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      "#upper-div div",
      {
        width: 0,
        height: 0,
        opacity: 0,
        ease: "elastic.in",
      },
      {
        height: "94px",
        stagger: 0.1,
        duration: 0.8,
        opacity: 1,
        width: "100%",
      }
    );
    tl.fromTo(
      "#lower-div div",
      {
        width: 0,
        height: 0,
        opacity: 0,
        ease: "elastic.in",
      },
      {
        height: "94px",
        stagger: 0.1,
        duration: 0.8,
        opacity: 1,
        width: "100%",
      },
      "<"
    );
    tl.fromTo(
      "#upper-div div",
      {
        scaleY: 1,
      },
      {
        duration: 0.8,
        opacity: 0,
        scaleY: 0,
        stagger: 0.1,
        ease: "circ.out",
        transformOrigin: "bottom",
      }
    );
    tl.fromTo(
      "#lower-div div",
      {
        scaleY: 1,
      },
      {
        duration: 0.8,
        opacity: 0,
        scaleY: 0,
        stagger: 0.1,
        ease: "circ.out",
        transformOrigin: "bottom",
      },
      "<"
    );
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg[#E0F11F] ">
      <div
        className=" w-full h-1/2 flex flex-col justify-start items-center rotate-180 backface-hidden "
        id="upper-div"
      >
        <div className=" bg-[#e0f11f]  "></div>
        <div className="bg-[#e0f11f]   "></div>
        <div className="bg-[#e0f11f]   "></div>
        <div className=" bg-[#e0f11f]  "></div>
        <div className="bg-[#e0f11f]  "></div>
      </div>
      <div
        className=" w-full h-1/2 flex flex-col justify-start items-center"
        id="lower-div"
      >
        <div className="bg-[#e0f11f]   "></div>
        <div className="bg-[#e0f11f]   "></div>
        <div className="bg-[#e0f11f]   "></div>
        <div className=" bg-[#e0f11f] "></div>
        <div className="bg-[#e0f11f]  "></div>
      </div>
    </div>
  );
};

export default Menu;
