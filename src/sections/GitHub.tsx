"use client";

import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import styles from "./styles/GitHub.module.css";
import "@/app/globals.css";

export default function GitHubSection() {
  const username = "Ultrasword";

  return (
    <div 
      id="GitHub" 
      className={`section-container ${styles.container}`}
      style={{ border: "1px solid rgba(255, 255, 255, 0.2)", borderRadius: "5px" }}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>GitHub Activity</h1>
        <p className={styles.subtitle}>
          Check out my open source contributions and latest repositories.
        </p>

        <div className={styles.calendarContainer}>
          <GitHubCalendar 
            username={username}
            colorScheme="dark"
            blockSize={12}
            blockMargin={5}
            fontSize={16}
          />
        </div>

        {/* <div className={styles.projectsContainer}>
           <GitHubProjects username={username} />
        </div> */}
      </div>
    </div>
  );
}
