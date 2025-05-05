export interface AboutData {
  title: string;
  intro: {
    heading: string;
    description: string;
  };
  brief: {
    heading: string;
    points: string[];
  };
  specialization: {
    heading: string;
    skills: {
      title: string;
      percentage: number;
    }[];
  };
}

export const about = {
  intro: {
    title: "ABOUT",
    heading: "How did I discovered Coding ?",
    description: `It all started at school, where I learned the basics of programming,
      starting with HTML and CSS! It all started there, and I loved it
      instantly. Unfortunately, that course didn’t last and programming fell
      into darkness in favour of the rest of my school year. But one day, by
      chance, YouTube gave me the most wonderful recommendation. Since then,
      web development has become an obvious choice for me.`,
  },
  brief: {
    heading: "In brief",
    points: [
      "Discovered coding at school",
      "Stepped away from it because of classes",
      "Rediscovered it through YouTube",
      "I love Coding hihi",
    ],
  },
  spe: {
    heading: "What am I specialized in",
    skills: [
      { title: "NextJs", percentage: 8 },
      { title: "TypeScript", percentage: 1 },
      { title: "Tailwind", percentage: 120 },
    ],
  },
};
