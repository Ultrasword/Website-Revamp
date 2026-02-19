import styles from "./styles/ExperienceCard.module.css";
import Image from "next/image";
import { useState } from "react";

export interface Experience {
  index: number;
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string[];
  companyLogo: string;
}

export function ExperienceCard({
  index,
  position,
  company,
  location,
  startDate,
  endDate,
  current,
  description,
  companyLogo,
}: Experience) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={styles[`container-${index % 2 == 0 ? "a" : "b"}`]}
      onClick={() => setIsExpanded(!isExpanded)}
      style={{ cursor: "pointer", transition: "all 0.3s ease" }}
    >
      <div className={styles["container-sub-parent"]}>
        <div className={styles["experience-viewer-item"]}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              padding: "10px",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <div style={{ width: "50px", height: "50px", flexShrink: 0 }}>
                <Image 
                  src={companyLogo} 
                  alt={company} 
                  width={50} 
                  height={50} 
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    fontFamily: "var(--fancy-font)",
                    marginBottom: "0",
                    lineHeight: "1.2",
                  }}
                >
                  {company}
                </p>
                <p style={{ fontSize: "14px", fontFamily: "var(--subtitle-font)", margin: 0, opacity: 0.8 }}>
                  {position}
                </p>
              </div>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "center" }}>
               <div style={{ fontSize: "12px", opacity: 0.7, marginBottom: "4px" }}>
                  {startDate} - {current ? "Present" : endDate}
               </div>
               <div style={{ fontSize: "12px", opacity: 0.7 }}>
                  {location}
               </div>
               <div style={{ marginTop: "5px", fontSize: "10px", opacity: 0.5 }}>
                 {isExpanded ? "Click to collapse" : "Click to expand"}
               </div>
            </div>
          </div>

          <div
            className={styles["experience-viewer-description-container"]}
            style={{
              maxHeight: isExpanded ? "1000px" : "0",
              opacity: isExpanded ? 1 : 0,
              overflow: "hidden",
              transition: "all 0.5s ease-in-out",
              border: isExpanded ? "1px solid rgba(255, 255, 255, 0.2)" : "none",
              marginTop: isExpanded ? "10px" : "0",
              padding: isExpanded ? "10px" : "0",
              borderRadius: "5px",
            }}
          >
            <ul className={styles["experience-viewer-description-list"]}>
              {description.map((desc, idx) => {
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
  );
}
