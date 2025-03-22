import Image from "next/image";
import React from "react";
import { roboto } from "@/fonts";
import "./hero.css";
import { Oxygen } from "next/font/google";

const oxygen = Oxygen({ weight: ["300", "400", "700"], subsets: ["latin"] });

const Hero = () => {
  return (
    <div className="bg-gradient h-screen w-full rounded-t-[50px] flex flex-col items-center justify-center">
      <h1 className={`text-[230px] ${oxygen.className} title text-black`}>
        Welcome
      </h1>
      <p
        className={`text-6xl flex flex-row items-center gap-5 mb-10 ${roboto.className}`}
      >
        I&apos;m Theo, a self taught
        <Image src={"/HeroCatImg.svg"} alt="cat" width={100} height={100} />
        React developer
      </p>
      <div className="text-5xl">SCROLL</div>
    </div>
  );
};

export default Hero;
