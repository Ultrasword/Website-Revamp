import "./Global.css";
import styles from "./Hero.module.css";

import ParticleBackground from "../components/particlesim";

export default function HeroSection() {
  return (
    <div style={{ width: "100%" }}>
      <div className={styles["hero-background"]}>
        <ParticleBackground />
      </div>
      <div className={`section-container ${styles["hero-container"]}`} style={{ width: "100%" }}>
        <div className={styles["hero-container"]}>
          <h1>Peter Zhang</h1>
          <p>Software Engineer</p>
        </div>
      </div>
    </div>
  );
}
