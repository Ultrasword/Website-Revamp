import styles from "./styles/Header.module.css";

import { RESUME_LINK } from "@/app/constants";

function HeaderCard(key: number, name: string) {
  return (
    <div key={key}>
      <a
        href={`#${name}`}
        style={{ textDecoration: "none" }}
        onClick={(e) => {
          e.preventDefault();
          document.querySelector(`#${name}`)?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <div className={name === "Resume" ? styles["resumecard"] : styles.card}>
          <p style={{ fontWeight: "bold" }}>{name}</p>
        </div>
      </a>
    </div>
  );
}

function resumeClicked(e: React.MouseEvent<HTMLDivElement>) {
  e.preventDefault();
  window.open(RESUME_LINK, "_blank");
}

export default function HeaderSection() {
  // open a file
  const names = ["Home", "About", "Jobs", "Projects"];

  return (
    <header id={"Home"} className={styles.header}>
      <div className={styles.container}>
        <div>
          <div className={styles.logo}>
            <a href={"https://peterzhang.dev"}>
              <p className={styles.nav}>peterzhang.dev</p>
            </a>
          </div>
        </div>
        <div style={{ width: "50%" }}></div>
        <div className={styles.nav}>{names.map((name, key) => HeaderCard(key, name))}</div>
        <div className={styles.nav} onClick={resumeClicked}>
          {HeaderCard(3, "Resume")}
        </div>
      </div>
    </header>
  );
}
