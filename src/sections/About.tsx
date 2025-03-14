import React from "react";
import Image from "next/image";

import "@/app/globals.css";
import styles from "./styles/About.module.css";

import MovingArrow from "@/components/MovingArrow";
import ParticleBackground from "@/components/ParticleSim";

export default function AboutSection() {
  const images = [
    "/collage/gamedev.mp4",
    "/collage/IMG_6105.JPG",
    "/collage/gamedev1.png",
    "/collage/portfolio1.png",
    "/collage/ski1.png",
    "/collage/tremblant1.png",
    "/collage/groupphoto.png",
    "/collage/IMG_6056.JPG",
    "/collage/IMG_6169.JPG",
  ];

  return (
    <div id={"About"} className={styles["container"]}>
      <div style={{ height: "100px", justifyContent: "center", display: "flex" }}>
        <MovingArrow targetSectionTitle="About" />
      </div>
      <div
        className={`section-container ${styles["container-grid"]}`}
        style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }}
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
            <ul
              style={{
                listStyleType: "none",
                lineHeight: "0.8",
                paddingLeft: "10px",
              }}
            >
              <li>⛷️ ski lover</li>
              <li>👾 game developer</li>
              <li>📚 full-stack dev</li>
              <li>🏸 badminton demon</li>
            </ul>
            <br></br>
            <p style={{ paddingTop: "20px" }}>
              I&apos;m down to chat about anything tech{" "}
              <i>or if you have job opportunities for me</i>
            </p>
            <p>
              <span style={{ fontSize: "12px" }}> (plz hit me up)</span>
            </p>
            <br></br>
          </div>
        </div>
        <div
          className={styles["right-container"]}
          style={{ border: "1px solid rgba(255, 255, 255, 0.2)", padding: "5px" }}
        >
          <div className={styles["collage-container"]}>
            {/* insert an image of me?? or a compilation of a few images? */}
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                style={{
                  gridArea: i === 0 ? "circle" : "auto",
                  overflow: "hidden",
                  height: "100%",
                  maxHeight: "100%",
                }}
              >
                {images[i].endsWith(".mp4") ? (
                  <video autoPlay muted loop playsInline style={{ width: "100%" }}>
                    <source src={images[i]} type="video/mp4" />
                  </video>
                ) : (
                  <div className={styles["collage-image"]}>
                    <Image
                      src={images[i]}
                      alt={`image${i}`}
                      width={500}
                      height={500}
                      style={{
                        display: "flex",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className={styles["bottom-container"]}>
          <p>Anyways...</p>
          <div className={styles["bottom-title"]}>
            <h1 style={{ fontWeight: "bold", textAlign: "center" }}>
              <span className={"text-gradient-mask-p1"}>Welcome to my personal website!</span>
            </h1>
          </div>
        </div>
        <div className={styles["bottom-content"]}>
          <div className={styles["bottom-content-container"]}>
            <ParticleBackground />
          </div>
        </div>
      </div>
      <div style={{ height: "100px", justifyContent: "center", display: "flex" }}>
        <MovingArrow targetSectionTitle={"Jobs"} />
      </div>
    </div>
  );
}
