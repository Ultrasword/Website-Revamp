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

export default function Home() {
  return (
    <div className={styles.container}>
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
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "small",
              padding: 0,
              margin: 0,
            }}
          >
            conway&apos;s game of life
          </p>
        </div>

        <Footer />
      </div>
    </div>
  );
}
