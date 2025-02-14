"use client";

import styles from "../styles/MovingArrow.module.css";

import { useEffect, useState } from "react";

export default function MovingArrow({ detectActive = false }) {
  const [isInactive, setIsInactive] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleActivity = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsInactive(true);
      }, 2000);
    };

    const handleMouseMove = () => {
      setIsInactive(false);
      handleActivity();
    };

    window.addEventListener("mousemove", handleMouseMove);

    handleActivity();

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div
        className={styles["arrow-icon"]}
        style={{
          visibility: isInactive || !detectActive ? "visible" : "hidden",
        }}
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
