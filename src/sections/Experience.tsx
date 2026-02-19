import React from "react";

import "@/app/globals.css";
import styles from "./styles/Experience.module.css";

import { ExperienceCard, Experience } from "@/components/ExperienceCard";

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      position: "Software Developer - Star Labs",
      company: "Vidyard",
      location: "Remote", // Assumed remote based on context, can be updated
      startDate: "May 2025", // Assumed based on QNX end date
      endDate: "Present",
      current: true,
      description: [
        "Engineered a cross-service RBAC system (Ruby on Rails, Bun/TypeScript) for 30k+ users, unlocking Fortune 500 compliance and enterprise-tier adoption.",
        "Led a 3-developer squad to deliver the AI Video Backgrounds feature in 5 weeks, owning the full SDLC from systems design, project administrative tasks, to production deployment.",
        "Reduced media rendering failures by optimizing AWS Lambda timeouts and configuring Datadog alerts for the video generation pipeline.",
        "Enforced data integrity across HubSpot/Zapier integrations by implementing granular permission scopes within the microservices architecture.",
      ],
      companyLogo: "/experiences/vidyard.png", // Placeholder
    },
    {
      position: "Software Developer in Test - Graphics Testing Team",
      company: "QNX",
      location: "Ottawa, ON",
      startDate: "Jan 2025",
      endDate: "Apr 2025",
      current: false,
      description: [
        "Automated 500+ weekly codec regression tests across RTOS targets by engineering a Jenkins CI/CD pipeline.",
        "Eliminated configuration drift by containerizing test environments with Docker for reproducible testing setups.",
        "Validated 4 major OS releases by designing regression suites that caught critical graphics driver defects.",
      ],
      companyLogo: "/experiences/qnx.png",
    },
    {
      position: "Software Developer - Cryptographic Security Team",
      company: "Blackberry",
      location: "Waterloo, ON",
      startDate: "May 2024",
      endDate: "Aug 2024",
      current: false,
      description: [
        "Designed a high-throughput \"Batch Request\" system in Java/TypeScript (MVC), implementing a caching layer to optimize cryptographic key generation, building new components, and verifying via manual testing.",
        "Worked with clients to modernize legacy security tooling by migrating SVN codebase to a Vaadin23 (modern java fullstack framework) significantly improving maintainability and performance in our proprietary software.",
      ],
      companyLogo: "/experiences/blackberry.png",
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
