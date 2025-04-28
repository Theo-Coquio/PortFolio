"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { bigShouldersDisplayBold } from "@/fonts";

interface MenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  headerRef: React.RefObject<HTMLDivElement | null>;
}

const Menu: React.FC<MenuProps> = ({ isOpen, headerRef }) => {
  useEffect(() => {
    const tl = gsap.timeline();

    // Animation Hover

    if (headerRef.current) {
      const firstButton = headerRef.current.querySelector("button:first-child");

      if (firstButton) {
        firstButton.addEventListener("mouseenter", () => {
          gsap.to(firstButton, {
            scale: 1.2,
            duration: 0.3,
            rotateZ: 10,
            ease: "power2.out",
          });
        });

        firstButton.addEventListener("mouseleave", () => {
          gsap.to(firstButton, {
            scale: 1,
            duration: 0.3,
            rotateZ: 0,
            ease: "power2.out",
          });
        });
      }
    }

    tl.set(
      "#menu",
      {
        display: "none",
        duration: 0.1,
        ease: "circ.in",
      },
      "<"
    );

    if (isOpen) {
      const elements = headerRef.current
        ? headerRef.current.querySelectorAll("button, h1")
        : [];
      const span = headerRef.current
        ? headerRef.current.querySelector("span")
        : [];

      tl.to(elements, {
        y: -100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "circ.out",
      });
      tl.to(
        span,
        {
          width: "100%",
          opacity: 1,
          duration: 0.1,
          ease: "circ.in",
        },
        "<"
      );

      // Header Removal

      tl.to(headerRef.current, {
        display: "none",
        duration: 0.1,
        ease: "circ.out",
      });

      // First Part

      tl.fromTo(
        "#upper-div div",
        {
          scaleX: 0,
          transformOrigin: "top",
          scaleY: 0,
          opacity: 0,
          ease: "circ.in",
        },
        {
          height: "94px",
          stagger: 0.1,
          duration: 0.4,
          opacity: 1,
          scaleX: 1,
          scaleY: 1,
        }
      );
      tl.fromTo(
        "#lower-div div",
        {
          scaleX: 0,
          scaleY: 0,
          transformOrigin: "bottom",

          opacity: 0,
          ease: "circ.in",
        },
        {
          height: "94px",
          stagger: 0.1,
          duration: 0.4,
          opacity: 1,
          scaleX: 1,
          scaleY: 1,
        },
        "<"
      );

      // Second Part
      tl.fromTo(
        "#upper-div div",
        {
          scaleY: 1,
        },
        {
          duration: 0.6,
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
          duration: 0.6,
          opacity: 0,
          scaleY: 0,
          stagger: 0.1,
          ease: "circ.out",
          transformOrigin: "bottom",
        },
        "<"
      );

      const letters = document.querySelectorAll(".letter");
      tl.to("#menu", {
        display: "block",
        duration: 0.1,
        ease: "circ.out",
      });

      tl.fromTo(
        letters,
        {
          y: 50, // Position initiale
          opacity: 0, // Invisible au départ
        },
        {
          y: 0, // Retour à la position initiale
          opacity: 1, // Complètement visible
          stagger: 0.05, // Décalage entre chaque lettre
          duration: 0.5, // Durée de l'animation
          ease: "power2.out", // Courbe d'animation
        },
        "+=0.1"
      );
    }
  }, [isOpen, headerRef]);

  const menuItems = ["Home", "About", "Projects", "Contact"];
  return (
    <>
      <div
        className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center pointer-events-none z-50 ${
          isOpen ? "block" : "hidden"
        } `}
      >
        <div
          className="absolute top-0 left-0  w-full h-1/2 flex-1 flex flex-col justify-start items-center rotate-180 backface-hidden "
          id="upper-div"
        >
          <div className="bg-[#e0f11f]  w-full "></div>
          <div className="bg-[#e0f11f]  w-full "></div>
          <div className="bg-[#e0f11f]  w-full "></div>
          <div className="bg-[#e0f11f]  w-full "></div>
          <div className="bg-[#e0f11f]  w-full"></div>
        </div>
        <div
          className="absolute bottom-0 left-0 w-full h-1/2 flex-1 flex flex-col justify-start items-center "
          id="lower-div"
        >
          <div className="bg-[#e0f11f] w-full  "></div>
          <div className="bg-[#e0f11f] w-full  "></div>
          <div className="bg-[#e0f11f] w-full "></div>
          <div className="bg-[#e0f11f] w-full "></div>
          <div className="bg-[#e0f11f] w-full "></div>
        </div>
        {/* Menu */}

        <div
          id="menu"
          className={`absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center px-[500px] bg-(--background) z-50 
           ${bigShouldersDisplayBold.className}
        }`}
        >
          <ul className="flex flex-col gap-14 items-center justify-center h-full   text-7xl  ">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="hover:text-green-500 transition-colors origin-bottom duration-300 ease-in-out transform cursor-pointer  "
              >
                {item.split("").map((letter, i) => (
                  <span key={i} className="letter inline-block">
                    {letter}
                  </span>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
