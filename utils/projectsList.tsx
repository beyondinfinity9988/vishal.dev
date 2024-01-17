export interface Project {
  title: string;
  desc: string;
  technologiesUsed: Array<string>;
  image: string;
  projectLink: string;
  gitLink: string;
  alt: string;
  width: number;
  height: number;
}

export const completedProjects: Project[] = [
  {
    title: "Text classification",
    desc: "he 20 newsgroups dataset comprises around 18000 newsgroups posts on 20 topics split in two subsets: one for training (or development) and the other one for testing (or for performance evaluation).",
    technologiesUsed: ["Python", "Jupiter NoteBook"],
    image: "/text.png",
    projectLink: "https://github.com/beyondinfinity9988/Text-Classification-using-Naive-Bayes",
    gitLink: "https://github.com/beyondinfinity9988/Text-Classification-using-Naive-Bayes",
    alt: "Shortest path project",
    width: 250,
    height: 230,
  },
  {
    title: "Expense Tracker",
    desc: "Expense tracker is a platform where evry your need related to ecpenses can be cleared or help u decide what fits best for your budget",
    technologiesUsed: ["React", "Tailwind", "Html"],
    image: "/xyc.png",
    projectLink: "https://github.com/beyondinfinity9988/finalproject/tree/master",
    gitLink: "https://github.com/beyondinfinity9988/finalproject/tree/master",
    alt: "budeget-app",
    width: 250,
    height: 230,
  },
  
  {
    title: "NodeLink",
    desc: "NodeLink is a way for users to connect to audiences with one link. Built using Node.js and React, users can simply register and have a website created for them. Users can customize their site and add links for their audiences.",
    technologiesUsed: ["React", "Node", "Tailwind"],
    image: "/projectimgs/man.webp",
    projectLink: "",
    gitLink: "",
    alt: "NodeLink",
    width: 250,
    height: 230,
  },
  {
    title: "This Website",
    desc: "This is my personal portfolio website. I built this website using Next.js (React) and Tailwind CSS.",
    technologiesUsed: ["React", "Next.js", "Tailwind"],
    image: "/01.png",
    projectLink: "",
    gitLink: "https://github.com/beyondinfinity9988/vishal.dev",
    alt: "This Website",
    width: 250,
    height: 230,
  },
];