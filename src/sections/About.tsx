import React from "react";
import Image from "next/image";

import "@/app/globals.css";
import styles from "./About.module.css";

export default function AboutSection() {
  return (
    <div
      id={"About"}
      className={`section-container ${styles["container-grid"]}`}
      style={{ top: 0, left: 0, position: "relative" }}
    >
      <div className={styles["left-container"]}>
        <div>
          <p className={"section-title"}>A little about me...</p>
        </div>
        <div>
          <p style={{ paddingBottom: "15px" }}>
            Hey! Fancy seeing you here
            <br></br>
            <span
              style={{
                color: "var(--primary-color-one)",
                fontSize: "17px",
                fontWeight: "bold",
              }}
            >
              {"( ^_^)／"}
            </span>
            <br></br>
          </p>
          <p style={{ paddingBottom: "10px" }}>{"I'm a bit of a..."}</p>
          <ul style={{ listStyleType: "none", lineHeight: "0.8", paddingLeft: "10px" }}>
            <li>⛷️ ski lover</li>
            <li>👾 game developer</li>
            <li>📚 full-stack dev</li>
            <li>🏸 badminton demon</li>
          </ul>
          <br></br>
          <p style={{ paddingTop: "20px" }}>
            ALSO I have a cat. <i>and i love to build things</i>
          </p>
          <br></br>
          <p style={{ fontWeight: "bold" }}>
            <span className={"text-gradient-mask-p1"}>Welcome to my personal website!</span>
          </p>
        </div>
      </div>
      <div className={styles["right-container"]}>
        <div className={styles["collage-container"]}>
          {/* insert an image of me?? or a compilation of a few images? */}
          <Image
            src="/collage/circle.jpg"
            alt="circle"
            layout="responsive"
            width={100}
            height={100}
            style={{ gridArea: "circle" }}
          />
          {Array.from({ length: 8 }).map((_, i) => (
            <Image
              key={i}
              src={"/collage/image1.jpg"}
              alt={`image${i}`}
              width={100}
              height={100}
              style={{ display: "flex", width: "100%", height: "auto" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
