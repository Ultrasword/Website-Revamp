"use client";

import "@/app/globals.css";
import styles from "./styles/Projects.module.css";

import ConwaysGameofLife from "@/components/ConwaysGameofLife";
import SingleCardViewer from "@/components/SingleCardViewer";

export default function SkillsSection() {
  // Store the explicit mount container element from inside the iframe.

  return (
    <div id={"Skills"} className={`section-container ${styles["skills-container"]}`}>
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
        {/* /* weird overlay time again */}
        <div style={{ borderRadius: "10px", overflow: "hidden" }}>
          <div id="ConwaySim" className={styles["conway-sim-container"]}>
            <ConwaysGameofLife />
          </div>
          <div className={styles["skillset-container"]}>
            {/* skills viewer */}
            <SingleCardViewer />
          </div>
        </div>
      </div>
    </div>
  );
}
