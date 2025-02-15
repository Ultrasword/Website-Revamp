"use client";

import styles from "./styles/MovingArrow.module.css";

interface MovingArrowProps {
  targetSectionTitle?: string;
  detectActive?: boolean;
}

export default function MovingArrow({ targetSectionTitle = "" }: MovingArrowProps) {
  return (
    <div
      onClick={(e) => {
        // jump to target ref
        e.preventDefault();
        if (!targetSectionTitle) return;
        document.querySelector(`#${targetSectionTitle}`)?.scrollIntoView({ behavior: "smooth" });
      }}
      className={styles["container"]}
    >
      <div
        className={styles["arrow-icon"]}
        // className={`${styles["arrow-icon"]} ${!isInactive ? "" : styles["arrow-icon-active"]}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>
    </div>
  );
}
