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
          It all started at school, where I learned the basics of programming,
          starting with HTML and CSS! It all started there, and I loved it
          instantly. Unfortunately, that course didn&apos;t last and programming
          fell into darkness in favour of the rest of my school year. But one
          day, by chance, YouTube gave me the most wonderful recommendation
          Since then, web development has become an obvious choice for me
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
