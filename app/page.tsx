"use client";
//import AnimationStart from "./Components/AnimationStart";

import About from "./Components/About/About";
import React from "react";
import Hero from "./Components/Hero/Hero";

// import Info from "./Components/Info/Info";
// import Profile from "./Components/Profile";

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col px-[500px]">
      <Hero />
      <About />
    </main>
  );
}
