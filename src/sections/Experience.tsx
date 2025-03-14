import React from "react";

import "@/app/globals.css";
import styles from "./styles/Experience.module.css";

import { ExperienceCard, Experience } from "@/components/ExperienceCard";

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      position: "Software Developer in Test",
      company: "QNX",
      location: "Ottawa, ON",
      startDate: "Jan 2025",
      endDate: "Apr 2025",
      current: true,
      description: [
        "Designed and implemented an Image Codec automation job (in Jenkins) consisting of 143 integration & unit tests using Shellscript and Python (pytest) on all 4 QNX operating system versions - automated 572 total tests in 2 weeks in Linux.",
        "Wrote Dockerfile specification to replicate test environment conditions for consistent integration and unit test results.",
        "Currently working on automating 30% of smoke, regression, and unit tests using pytest in Python and bash.",
        "Developed an internal test results parsing automation in Python and Flask for simple test result visualization.",
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
        "Collaborated in daily scrum standups and sprint retrospectives and wrote docs for development environment setup.",
        "Performed manual development tasks by merging SVN commits from a legacy framework to a modernized UI framework by debugging, refactoring, and conducting lab-based tests and verification of feature functionality of the application.",
        "Developed a “Batch Request” in Typescript and Java following an MVC design pattern to dynamically cache frontend interactions (cryptographic key generation, system logs, etc.) into a PostgreSQL database — leveraging cryptographic design principles acquired through an internal course.",
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
        "Led 3 team members to build and design 2 months worth of educational content for 2 cohorts of 40 students — ages 10 - 16 — on Java, Web Development, and CAD principles.",
        "Shared personal knowledge on Java Design Features (Object Oriented Programming, Syntax, Functional Modules), Robotics Software Development Principles (Odometry, etc), and Web Development (HTML/CSS, JS) ",
      ],
      companyLogo: "/experiences/accn.png",
    },
  ] as Experience[];

  return (
    <div
      id={"Jobs"}
      className={`section-container`}
      style={{ border: "1px solid rgba(255, 255, 255, 0.2)", borderRadius: "5px" }}
    >
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
      </div>

      {/* jobs listing section */}
      <div className={styles["main-container"]}>
        <div className={styles["experiences-list"]}>
          {experiences.map((experience, idx) => {
            return (
              <ExperienceCard
                key={idx}
                index={idx}
                position={experience.position}
                company={experience.company}
                location={experience.location}
                startDate={experience.startDate}
                endDate={experience.endDate}
                current={experience.current}
                description={experience.description}
                companyLogo={experience.companyLogo}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
