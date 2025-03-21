import React from "react";

const Info = () => {
  return (
    <div className="w-full h-96 bg-black border-white border mb-20 p-10 flex flex-row">
      <div className="flex-1">
        <h1 className="text-5xl">About me</h1>
        <p>I&apos;m Théo a 20 years old react developer</p>
      </div>
      <div className="flex-1">
        <h1 className="text-3xl">How did I discovered Coding ?</h1>
        <p>
          At school, I discovered the basics or programing, with langages like
          HTML and CSS, and I loved it straight away. But the courses
          didn&apos;t last, until one day, by chance, a YouTube video rekindled
          my passion. Since then, web development has become an obvious choice
          for me: it&apos;s what I want to do!
        </p>
      </div>
      <div className="flex-1">
        <h1>What I Do</h1>
        <p>I&apos;m specialized learning Nextjs and typescript</p>
      </div>
    </div>
  );
};

export default Info;
