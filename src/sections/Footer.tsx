import "@/app/globals.css";
import styles from "@/sections/styles/Footer.module.css";

import { RESUME_LINK } from "@/app/constants";
import Image from "next/image";

interface LinkProps {
  text: string;
  href: string;
}

interface FooterInfoProps {
  title: string;
  items: LinkProps[];
}

export function Footer() {
  const footerInfo: FooterInfoProps[] = [
    {
      title: "Socials",
      items: [
        {
          text: "Github",
          href: "https://github.com/Ultrasword",
        },
        {
          text: "LinkedIn",
          href: "https://www.linkedin.com/in/peterzhang1/",
        },
        {
          text: "Spotify",
          href: "https://open.spotify.com/user/ivh5jy0syljs6hc097zn62iw9?si=313980cba16448fa",
        },
      ],
    },
    {
      title: "Contact",
      items: [
        {
          text: "Email",
          href: "mailto:p28zhang@uwaterloo.ca",
        },
        {
          text: "Resume",
          href: RESUME_LINK,
        },
      ],
    },
  ];

  return (
    <div className={styles["container"]}>
      <div className={styles["footer-container"]}>
        {footerInfo.map((info, i) => (
          <div key={i}>
            <div>
              <h3>{info.title}</h3>
            </div>
            <div className={styles["footer-item"]}>
              {info.items.map((item, j) => (
                <div key={j} className={styles["footer-item"]}>
                  {item.href === "noop" ? (
                    <p>{item.text}</p>
                  ) : (
                    <a key={j} href={item.href} target="_blank" rel="noopener noreferrer">
                      {item.text}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={styles["content-container"]}>
        <div style={{ marginBottom: "10px", justifyContent: "center", display: "flex" }}>
          <a
            href="https://github.com/Peter-Dated-Projects/02-10-2025_personal-website"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
            Source Code
          </a>
        </div>
        <div style={{ marginBottom: "10px", justifyContent: "center" }}>
          Made with <span style={{ color: "red" }}>&#9829;</span> by Peter Zhang
        </div>
      </div>
    </div>
  );
}
