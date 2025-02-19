import React from "react";
import Image from "next/image";

import "@/app/globals.css";
import styles from "./styles/Experience.module.css";

import ExperienceCard from "@/components/ExperienceCard";

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
    {
      position: "Java/Web/CAD Teacher",
      company: "ACCN",
      location: "Scarborough, ON",
      startDate: "May 2023",
      endDate: "Aug 2023",
      current: false,
      description: ["filler text 1", "filler text 2"],
      companyLogo: "/experiences/accn.png",
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
        <p>
          Here&apos;s a small list of places I&apos;ve <u>worked</u> so far!
        </p>
      </div>

      <div className={styles["main-container"]}>
        <div className={styles["left-container"]}>
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
                  <Image
                    src={experience.companyLogo}
                    alt={experience.company}
                    width={100}
                    height={100}
                    style={{
                      width: "auto",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles["right-container"]}>
          <div ref={activeExperienceRef} className={styles["experience-viewer"]}>
            {/* active experience information! */}
            <ExperienceCard {...experiences[activeExperienceIndex]} />
          </div>
        </div>
      </div>
    </div>
  );
}
