"use client";

import "@/app/globals.css";
import styles from "./Hero.module.css";

import TypewriterComponent from "typewriter-effect";

import ParticleBackground from "@/components/ParticleSim";

export default function HeroSection() {
  const titles = [
    "i think we all know this is hella cliche",
    "I'm a Software Engineer",
    "and a Full Stack Developer",
    "I also love to SKI!",
    "please don't cringe",
    "I like making games",
    "this is in literally every single personal website",
    "UW for the win!",
  ];

  return (
    <div id={"Hero"} style={{ width: "100%", top: 0, left: 0 }}>
      <div
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
          width: "100%",
          height: "470px",
          position: "absolute",
          zIndex: -1,
          top: 0,
          left: 0,
        }}
      >
        <div className={`${styles["hero-background"]} ${styles["hero-background-mask"]}`}>
          <ParticleBackground />
        </div>
      </div>

      {/* text and visuals */}
      <div className={`section-container ${styles["hero-container"]}`} style={{ width: "100%" }}>
        <div
          className={styles["hero-container"]}
          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <div>
            <h1
              style={{
                fontWeight: "90px",
                fontSize: "60px",
                fontFamily: "var(--fancy-font)",
                margin: "0",
              }}
            >
              Peter Zhang
            </h1>
          </div>
          <div>
            <div
              style={{ fontSize: "20px", fontFamily: "var(--subtitle-font)", textAlign: "center" }}
            >
              <TypewriterComponent
                options={{
                  strings: titles,
                  autoStart: true,
                  loop: true,
                  delay: 50, // Adjust the delay to make the typing faster
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
