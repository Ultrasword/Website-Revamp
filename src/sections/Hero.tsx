"use client";

import "@/app/globals.css";
import styles from "./styles/Hero.module.css";

import TypewriterComponent from "typewriter-effect";

import ParticleBackground from "@/components/ParticleSim";

export default function HeroSection() {
  const titles = [
    "Software Engineer...",
    "Robot Lover <3",
    "Full Stack dev",
    "Professional Downhill Snow Speedster",
    "python Game Dev",
    "University Student",
  ];

  return (
    <div id={"Hero"} style={{ width: "100%", top: 0, left: 0 }}>
      <div className={styles["container"]}>
        <div className={`${styles["hero-background"]} ${styles["hero-background-mask"]}`}>
          <ParticleBackground />
        </div>
      </div>

      {/* text and visuals */}
      <div className={`section-container ${styles["hero-container"]}`} style={{ width: "100%" }}>
        <div
          className={styles["hero-container"]}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <h1 className={styles["hero-title"]}>Peter Zhang</h1>
          </div>
          <div>
            <div className={styles["hero-subtitle"]}>
              <span>I&apos;m a&nbsp;</span>
              <span>
                <TypewriterComponent
                  options={{
                    strings: titles,
                    autoStart: true,
                    loop: true,
                    delay: 50, // Adjust the delay to make the typing faster
                  }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
