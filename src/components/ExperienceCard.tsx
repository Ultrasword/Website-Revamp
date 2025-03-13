import styles from "./styles/ExperienceCard.module.css";
import Image from "next/image";

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

const transparency = "0.6";
const primaryBackground = `linear-gradient(135deg, rgba(255, 0, 150, ${transparency}), rgba(0, 204, 255, ${transparency}))`;
const secondaryBackground = `linear-gradient(135deg, rgba(0, 204, 255, ${transparency}), rgba(255, 0, 150, ${transparency}))`;

console.log(primaryBackground, secondaryBackground);

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
  return (
    <div
      style={{
        borderRadius: "5px",
        backgroundImage: index % 2 == 0 ? primaryBackground : secondaryBackground,
        backgroundOrigin: "border-box",
        backgroundClip: "content-box, border-box",
      }}
    >
      <div className={styles["experience-viewer-item"]}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            padding: "10px",
          }}
        >
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <div style={{ width: "50px" }}>
              <Image src={companyLogo} alt={company} width={50} height={50} />
            </div>
            <div>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
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

          {current ? (
            <div
              style={{
                display: "flex",
                justifyContent: "right",
                fontSize: "small",
                alignContent: "center",
              }}
            >
              Current
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "right",
                fontSize: "small",
              }}
            >
              <p>{startDate}</p>
              <p style={{ display: "flex", alignItems: "center" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="16px"
                  height="16px"
                >
                  <path d="M10 17l5-5-5-5v10z" />
                </svg>
              </p>
              <p>{endDate}</p>
            </div>
          )}
        </div>
        <div
          className={styles["experience-viewer-description-container"]}
          style={{
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "5px",
            marginRight: "5px",
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
  );
}
