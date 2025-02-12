"use client";

import "@/app/globals.css";
import styles from "./Skills.module.css";
import ConwaysGameofLife from "@/components/ConwaysGameofLife";

export default function SkillsSection() {
  // Store the explicit mount container element from inside the iframe.

  return (
    <div className={`section-container ${styles["skills-container"]}`}>
      <div>
        <div>
          <h1>
            My Special{" "}
            <span className="text-gradient-mask-p2" data-text="Skills">
              Skills
            </span>
          </h1>
          <p>
            Here are my main{" "}
            <span className="text-gradient-mask-p1" data-text="skillsets">
              <b>skillsets</b>
            </span>
            . I&apos;m proud of them.
          </p>
        </div>
        {/* weird overlay time again */}
        <div>
          <div id="ConwaySim" className={styles["conway-sim-container"]}>
            <ConwaysGameofLife />
          </div>
          <div className={styles["skillset-container"]}>
            <div className={styles["skillset-card"]}>
              <p>Information</p>
              <p>this feels like cheating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
