import React from "react";

import "./Global.css";
import styles from "./About.module.css";

export default function AboutSection() {
  return (
    <div id={"AboutSection"} className={`section-container ${styles["container-grid"]}`}>
      <div className={styles["left-container"]}>
        <p className={"section-title"}>A little about me...</p>
        <div>
          <p style={{ paddingBottom: "15px" }}>
            Hey! Fancy seeing you here <br></br>
            <span
              style={{
                color: "var(--primary-color-one-light)",
                fontSize: "17px",
                fontWeight: "bold",
              }}
            >
              ( ^_^)／
            </span>
            <br></br>
          </p>
          <p style={{ paddingBottom: "15px" }}>I'm a bit of a...</p>
          <ul style={{ listStyleType: "none", lineHeight: "0.8", paddingLeft: "10px" }}>
            <li>⛷️ ski lover</li>
            <li>👾 game developer</li>
            <li>📚 full-stack dev</li>
            <li>🏸 badminton demon</li>
          </ul>
          <p style={{ paddingTop: "15px" }}>
            ALSO I have a cat. <i>and i love to build things</i>
          </p>
          <br></br>
          <p style={{ fontWeight: "bold" }}>
            <span className={"text-gradient-mask"}>Welcome to my personal website!</span>
          </p>
        </div>
      </div>
      <div className={styles["right-container"]}>
        <div className={styles["collage-container"]}>
          {/* insert an image of me?? or a compilation of a few images? */}
          <img
            src="/collage/circle.jpg"
            alt="circle"
            style={{ gridArea: "circle", width: "100%", height: "auto" }}
          />
          {Array.from({ length: 8 }).map((_, i) => (
            <img
              src={"/collage/image1.jpg"}
              alt={`image${i}`}
              style={{ display: "flex", width: "100%", height: "auto" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
