import styles from "./styles/ExperienceCard.module.css";

interface Experience {
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string[];
  companyLogo: string;
}

export default function ExperienceCard({
  position,
  company,
  location,
  startDate,
  endDate,
  current,
  description,
  companyLogo,
}: Experience) {
  return (
    <div className={styles["experience-viewer-item"]}>
      <p style={{ visibility: "hidden" }}>
        {current} {companyLogo}
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "10px" }}>
        <div style={{ display: "flex", gap: "5px", alignItems: "flex-end" }}>
          <div style={{ alignSelf: "flex-end" }}>
            <p
              style={{
                fontWeight: "bold",
                fontFamily: "var(--fancy-font)",
              }}
            >
              {company}
            </p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}>
          <p style={{ textAlign: "right" }}>{location}</p>
        </div>
        <div>
          <p style={{ fontSize: "13px", fontFamily: "var(--subtitle-font)" }}>{position}</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            fontSize: "13px",
          }}
        >
          <span>{startDate}</span>
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
          <span>{endDate}</span>
        </div>
      </div>
      <div style={{ padding: "10px" }}>
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
  );
}
