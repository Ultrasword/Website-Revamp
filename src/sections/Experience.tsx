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
        "since this page is still under production, here's a short description of my work at QNX:",
        "i did software testing for the new OS releases",
        "i also helped automated 58% of the testing scripts",
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
      description: [
        "here i did some different work",
        "I helped basically (from start to finish) upgrade one of Blackberry's software applications",
        "I also helped with some testing and debugging",
      ],
      companyLogo: "/experiences/blackberry.png",
    },
    {
      position: "Java/Web/CAD Teacher",
      company: "ACCN",
      location: "Scarborough, ON",
      startDate: "May 2023",
      endDate: "Aug 2023",
      current: false,
      description: [
        "Here I was a counciller for an online summer camp",
        "me and 2 other councillors would teach kids how to code in Java, Web Development, and CAD",
        "we supervised 40+ students and would essentially curate the entire summer camp for them",
      ],
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
      <div className={styles["content-container"]}>
        <div style={{ textAlign: "left", justifyContent: "left", alignContent: "left" }}>
          <h1 style={{ textAlign: "left" }}>
            Jobs <span style={{ fontSize: "15px" }}>(places i&apos;ve worked so far...)</span>
          </h1>
        </div>
        <div>
          <p>
            I&apos;m always looking to find new and exciting internship/coop opportunities - and
            I&apos;m OK with working away from home.
          </p>
          <p>If you&apos;re a person who is looking for a software engineer, let me know!</p>
          <p>I&apos;d love an opportunity to speak with you :)</p>
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
    </div>
  );
}
