import React from "react";

import "@/app/globals.css";
import styles from "./styles/Experience.module.css";

export default function ExperienceSection() {
  const experiences = [
    {
      position: "Software Developer in Test",
      company: "QNX",
      location: "Ottawa, ON",
      startDate: "Jan 2025",
      endDate: "Apr 2025",
      current: true,
      description: [
        "filler text 1 tat is super duper duper duepr duepr duper pe upe dupe long",
        "filler text 2",
      ],
      companyLogo: "/experiences/qnx.png",
    },
    {
      position: "Software Developer Intern",
      company: "Blackberry",
      location: "Waterloo, ON",
      startDate: "May 2024",
      endDate: "Aug 2024",
      current: false,
      description: ["filler text 1", "filler text 2"],
      companyLogo: "/experiences/blackberry.png",
    },
  ];

  const [activeExperienceIndex, setActiveExperienceIndex] = React.useState(0);
  const activeExperienceRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    // ensure object exists
    if (!activeExperienceRef.current) return;
  });

  return (
    <div className={`section-container`}>
      <div style={{ textAlign: "left", justifyContent: "left", alignContent: "left" }}>
        <h1 style={{ textAlign: "left" }}>I&apos;ve worked [...] so far!</h1>
      </div>
      <div className={styles["main-container"]}>
        <div className={styles["left-container"]}>
          <div style={{ padding: "5px" }}>
            <p>This will contain a small list of places I&apos;ve worked?</p>
          </div>
          <div className={styles["experience-list"]}>
            {experiences.map((experience, idx) => {
              return (
                <div
                  key={idx}
                  className={styles["experience-list-item"]}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveExperienceIndex(idx);
                  }}
                >
                  {experience.company}
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles["right-container"]}>
          <div ref={activeExperienceRef} className={styles["experience-viewer"]}>
            {/* active experience information! */}
            <div className={styles["experience-viewer-item"]}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "10px" }}>
                <div style={{ display: "flex", gap: "5px", alignItems: "flex-end" }}>
                  <div style={{ alignSelf: "flex-end" }}>
                    <p
                      style={{
                        fontWeight: "bold",
                        fontFamily: "var(--fancy-font)",
                      }}
                    >
                      {experiences[activeExperienceIndex].company}
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: "13px", fontFamily: "var(--subtitle-font)" }}>
                      {experiences[activeExperienceIndex].position}
                    </p>
                  </div>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}
                >
                  <div>
                    <p style={{ textAlign: "right" }}>
                      {experiences[activeExperienceIndex].location}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    fontSize: "13px",
                  }}
                >
                  <span>{experiences[activeExperienceIndex].startDate}</span>
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      width="16px"
                      height="16px"
                    >
                      <path d="M10 17l5-5-5-5v10z" />
                    </svg>
                  </span>
                  <span>{experiences[activeExperienceIndex].endDate}</span>
                </div>
              </div>
              <div style={{ padding: "10px" }}>
                <ul className={styles["experience-viewer-description-list"]}>
                  {experiences[activeExperienceIndex].description.map((desc, idx) => {
                    return (
                      <li key={idx} className={styles["experience-viewer-item-description"]}>
                        <span>{desc}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
