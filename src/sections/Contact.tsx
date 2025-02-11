import "./Global.css";

import styles from "./Contact.module.css";

import Image from "next/image";
import ResumeContainer from "@/components/resume";

interface SocialContactProps {
  key: number;
  name: string;
  link: string;
  icon: string;
  username: string;
}

const SocialContactContainer = ({ key, name, link, icon, username }: SocialContactProps) => {
  return (
    <div id={`socialcontactcontainer${key}`} className={styles["social-contact"]}>
      <a href={link} target="_blank">
        <div className={styles["social-link"]}>
          <Image
            src={icon}
            alt={`${name} icon`}
            width={100}
            height={100}
            className={styles["social-icon"]}
            style={{ filter: "invert(1)", pointerEvents: "none" }} // This will invert the colors of the SVG
          />
          <div style={{ display: "flex", alignItems: "center", paddingLeft: "10px" }}>
            <p>{name}</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", paddingLeft: "10px" }}>
            <p>{username}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default function ContactSection() {
  const icons = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/peterzhang1/",
      icon: "/icons/linkedin.svg",
      username: "Peter Zhang",
    },
    {
      name: "GitHub",
      link: "https://github.com/Ultrasword",
      icon: "/icons/github.svg",
      username: "Ultrasword",
    },
    {
      name: "YouTube",
      link: "https://www.youtube.com/@petthepotat",
      icon: "/icons/youtube.svg",
      username: "petthepotat",
    },
  ];

  return (
    <div id={"Contact"} className={`section-container ${styles.container}`}>
      <h1>Contact Me</h1>
      <div className={styles["contact-grid"]}>
        <div className={styles["contact-card"]}>
          <h3>Wanna chat about something?</h3>
          <p style={{ paddingTop: "20px" }}>{`I gotchu.`}</p>
          <p>
            {`I'm chill`} <i>(at least I think I am)</i>
          </p>
          <br></br>
          <p>Anyways, here are some of my socials!</p>
          <br></br>
          {/* create some fun floating icon space */}
          <div className={styles["icon-container"]}>
            {icons.map((icon, key) => SocialContactContainer({ key, ...icon }))}
          </div>
        </div>
        <div>
          <p>
            Click my Resume to <b>open up!</b>
          </p>
          <ResumeContainer />
        </div>
      </div>
    </div>
  );
}
