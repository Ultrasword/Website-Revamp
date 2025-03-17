"use client";

import "@/app/globals.css";
import styles from "./styles/Projects.module.css";

import { SingleCard, SingleCardProps } from "@/components/SingleCard";

const cardProps = [
  {
    title: "Daily Vibez - cuHacking Submission",
    description: [
      "cuHacking submission for the 2nd Carleton hosted hackathon. Generates a daily vlog - a representation of the daily vibe.",
      "Designed and built an AI assisted automated video capture system and video search engine in under 36 hours.",
      "Used a Raspberry Pi 4B, camera and microphone to capture video and audio + Gemini API to generate context",
      "Built a custom video context caching system to increase video search engine speed by 300% and a custom backend server hosted on the RPI4 using fastapi.",
      "I was inspired by the idea of having a daily vlog that was automatically generated and edited for me. I wanted to build a system that could capture my day and edit it into a video for me.",
    ],
    image: "/projects/daily-vibez.png",
    tags: [
      "Python",
      "FastAPI",
      "Raspberry Pi",
      "Gemini API",
      "Github",
      "React",
      "Next.js",
      "Typescript",
    ],
    github: "https://github.com/Ultrasword/03-14-2025_cuhacking-qnx-hack",
  },
  {
    title: "Portfolio Website",
    description: [
      "Built a fully reactive personal website for you wonderful people to check out the cool stuff I’ve been working on!",
      "I was inspired by many of my friends (who had great looking website) and I decided to upgrade from my old one. You can find that here: <a href='https://peterzhang.ca'>https://peterzhang.vercel.app/</a>",
      "This site can be found at: <a href='https://peterzhang.dev'>https://peterzhang.dev</a>",
    ],
    image: "/projects/p1.png",
    tags: ["React", "Next.js", "Typescript", "ThreeJS", "Vercel", "Github"],
    github: "https://github.com/Peter-Dated-Projects/02-10-2025_personal-website",
  },
  {
    title: "Statemachine Developer Assistant",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "python",
      "flask",
      "firebase",
      "ReactFlow",
      "MonacoEditor",
    ],
    description: [
      "Designed and built a functional node & statemachine based code editor to help developers build and visualize their statemachines.",
      "The application generates over 70% of the code you’ll write and has a built-in AI assistant to help refine your code processes.",
      "I was inspired mainly by my own need for a statemachine programmer. I built a statemachine for my Desktop Pet Assistant Application and realized that writing out all the state code was <i>unrealistic</i>, especially since I was going to have to write many more for my game I’ll be making using the SoraGL Game Engine.",
    ],
    image: "/projects/image2.png",
    github: "https://github.com/Peter-Dated-Projects/02-28-2025_statemachine-editor",
  },
  {
    title: "Desktop Pet Assistant",
    description: [
      "Designed and built a fully functional desktop pet (it’s a cat) that wanders around and lives its life on your computer screen.",
      "I’m currently implementing AI assistant features (<i>integrated with Ollama and every productivity app I might use</i>) for increased user productivity and time management.",
      "I was inspired by Jarvis AI from <b>Iron Man</b>",
    ],
    image: "/projects/image3.png",
    tags: ["python", "PyQt5", "Ollama", "Github"],
    github: "https://github.com/Peter-Dated-Projects/02-18-2025_desktop-pet-assistant",
  },
  {
    title: "Raytracer Engine",
    description: [
      "Implemented a Ray Tracing Rendering engine in C++ — inspired by <a href='https://raytracing.github.io/books/RayTracingInOneWeekend.html'>RayTracingInOneWeekend</a>",
      "I also implemented multi-core processing to superboost CPU-side rendering",
      "I was inspired by every single human being to make a YouTube video on building a raytracer in C/C++",
    ],
    image: "/projects/p3.png",
    tags: ["C++", "make", "multiprocessing", "Github"],
    github: "https://github.com/Peter-Dated-Projects/01-13-2025_ray-tracing-project",
  },
  {
    title: "SoraGL: 3D Game Engine",
    description: [
      "I created a fully functional 3D game engine using Python and OpenGL — <i>and am currently working on adding more features</i>",
      "I’m also currently using this game engine to build one of my first video games — <i>which will be a rogue-lite procedurally generated 2d shooter game</i>",
      "I was inspired by some of my YouTube idols in the game dev industry to build games, and decided I’d build my own game engine as well.",
    ],
    image: "/projects/p2.gif",
    tags: ["python", "sdl2", "opengl", "pybox2d", "numpy", "Github"],
    github: "https://github.com/Peter-Dated-Projects/01-19-2025_soragl-game-engine",
  },
] as SingleCardProps[];

export default function SkillsSection() {
  // Store the explicit mount container element from inside the iframe.

  return (
    <div
      id={"Projects"}
      className={`section-container ${styles["skills-container"]}`}
      style={{ border: "1px solid rgba(255, 255, 255, 0.2)", borderRadius: "5px" }}
    >
      <div>
        <div>
          <h1>Projects I&apos;ve worked on </h1>
          <p>
            Here&apos;s an overview of some of my personal projects! I&apos;ve worked on a variety
            of projects, ranging from <b>web development</b> to <b>game development</b>.
          </p>
          <p>I&apos;m always looking to learn more as well!</p>
          <p>So if you have any cool or interesting project ideas, please send them my way :)</p>
        </div>
        <div style={{ height: "30px" }}></div>
        {/* /* weird overlay time again */}
        <div className={styles["skillset-container"]}>
          {cardProps.map((card, i) => (
            <SingleCard key={i} index={i} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}
