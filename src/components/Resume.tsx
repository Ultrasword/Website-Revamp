"use client";

import React from "react";

import styles from "./styles/Resume.module.css";

const ResumeContainer = () => {
  return (
    <div className={styles["resume-container"]}>
      <a
        href="https://www.canva.com/design/DAGeiavI1Fo/XIM8XYruf72ekkVaK_VlDw/view?embed"
        style={{ width: "100%" }}
      >
        <iframe
          src="https://www.canva.com/design/DAGeiavI1Fo/XIM8XYruf72ekkVaK_VlDw/view?embed"
          width="100%"
          height="500px"
          style={{ border: "none" }}
          allowFullScreen={true}
        ></iframe>
      </a>
    </div>
  );
};

export default ResumeContainer;
