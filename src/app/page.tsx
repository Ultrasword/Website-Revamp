"use client";

import Image from "next/image";
import styles from "./page.module.css";

import HeaderSection from "@/sections/Header";
import AboutSection from "@/sections/About";
import HeroSection from "@/sections/Hero";
import ExperienceSection from "@/sections/Experience";
import SkillsSection from "@/sections/Projects";

import ConwaysGameofLife from "@/components/ConwaysGameofLife";
import MovingArrow from "@/components/MovingArrow";

export default function Home() {
  return (
    <div>
      <div className={styles.page}>
        <HeaderSection />
        <HeroSection />

        <main className={styles.main}>
          <AboutSection />
          <ExperienceSection />
          <div style={{ height: "100px" }}></div>
          <div style={{ height: "100px", justifyContent: "center", display: "flex" }}>
            <MovingArrow targetSectionTitle={"Skills"} />
          </div>
          <SkillsSection />
        </main>

        <div id="ConwaySim" className={styles["conway-sim-container"]}>
          <ConwaysGameofLife />
        </div>

        {/* work on footer */}
        <footer className={styles.footer}>
          <div style={{ marginBottom: "10px", justifyContent: "center", display: "flex" }}>
            <a
              href="https://github.com/Peter-Dated-Projects/02-10-2025_personal-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
              Source Code
            </a>
          </div>
          <div style={{ marginBottom: "10px", justifyContent: "center" }}>
            Made with <span style={{ color: "red" }}>&#9829;</span> by Peter Zhang
          </div>
        </footer>
      </div>
    </div>
  );
}
