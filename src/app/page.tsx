"use client";

import styles from "./page.module.css";

import HeaderSection from "@/sections/Header";
import AboutSection from "@/sections/About";
import HeroSection from "@/sections/Hero";
import ExperienceSection from "@/sections/Experience";
import SkillsSection from "@/sections/Projects";
import { Footer } from "@/sections/Footer";

import ConwaysGameofLife from "@/components/ConwaysGameofLife";
import MovingArrow from "@/components/MovingArrow";

export const RESUME_LINK: string =
  "https://drive.google.com/file/d/1s2gR5e9KhTEcy7k9PG96SvaaX94HdmsU/view?usp=sharing";

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
        <div>
          <p style={{ fontSize: "small", padding: 0, margin: 0 }}>conway&apos;s game of life</p>
        </div>

        <Footer />
      </div>
    </div>
  );
}
