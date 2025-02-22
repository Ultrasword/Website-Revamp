"use client";

import Image from "next/image";
import styles from "./page.module.css";

import HeaderSection from "@/sections/Header";
import AboutSection from "@/sections/About";
import ContactSection from "@/sections/Contact";
import HeroSection from "@/sections/Hero";
import ExperienceSection from "@/sections/Experience";
import SkillsSection from "@/sections/Projects";

export default function Home() {
  return (
    <div>
      <div className={styles.page}>
        <HeaderSection />
        <HeroSection />

        <main className={styles.main}>
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />

          <ContactSection />
        </main>

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
