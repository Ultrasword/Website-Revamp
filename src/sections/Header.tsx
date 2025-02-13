"use client";

import styles from "./Header.module.css";

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
  window.open(
    "https://www.canva.com/design/DAGeiavI1Fo/HN1crRZno_mStkB6FnpvkA/view?utm_content=DAGeiavI1Fo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he5249bb08d",
    "_blank"
  );
}

export default function HeaderSection() {
  // open a file
  const names = ["Home", "About", "Contact"];

  return (
    <header id={"Home"} className={styles.header}>
      <div className={styles.container}>
        <div>
          <div className={styles.logo}>
            <a href={"https://peterzhang.dev"}>
              <p style={{ fontWeight: "bold", fontSize: "20px" }} className={styles.nav}>
                peterzhang.dev
              </p>
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
