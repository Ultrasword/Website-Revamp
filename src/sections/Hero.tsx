"use client";

import "./Global.css";
import styles from "./Hero.module.css";

import TypewriterComponent from "typewriter-effect";

import ParticleBackground from "@/components/particlesim";

export default function HeroSection() {
  const titles = [
    "Software Engineer",
    "Full Stack Developer",
    "Game Developer",
    "Badminton Demon",
    "Ski Lover",
    "Cat Owner",
    "Engineering Student",
  ];

  return (
    <div id={"Hero"} style={{ width: "100%" }}>
      <div
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
          width: "100%",
          height: "470px",
          position: "absolute",
          zIndex: -1,
          top: 0,
        }}
      >
        <div className={`${styles["hero-background"]} ${styles["hero-background-mask"]}`}>
          <ParticleBackground />
        </div>
      </div>
      <div className={`section-container ${styles["hero-container"]}`} style={{ width: "100%" }}>
        <div className={styles["hero-container"]}>
          <h1 style={{ fontWeight: "80px" }}>Peter Zhang</h1>
          <TypewriterComponent
            options={{
              strings: titles,
              autoStart: true,
              loop: true,
              delay: 50, // Adjust the delay to make the typing faster
              pauseFor: 3000, // Adjust the pause duration to make it longer
            }}
          />
        </div>
      </div>
    </div>
  );
}
