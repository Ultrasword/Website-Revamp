import styles from "./styles/SingleCardViewer.module.css";
import React, { Component } from "react";

import Image from "next/image";

interface SingleCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

class SingleCard extends Component<SingleCardProps> {
  constructor(props: SingleCardProps) {
    super(props);
  }

  render() {
    const { title, description, image, tags } = this.props;
    return (
      <div className={styles["single-card"]}>
        <div>
          <h2 className={styles["card-title"]}>{title}</h2>
        </div>

        <div className={styles["single-card-content"]}>
          <div className={styles["single-card-left"]}>
            <Image
              src={image}
              alt={title}
              width={300}
              height={300}
              style={{
                objectFit: "cover",
                aspectRatio: "1 / 1",
                maxHeight: "100%",
                maxWidth: "100%",
                width: "auto",
                height: "auto",
              }}
            />
          </div>
          <div className={styles["single-card-right"]}>
            <div>
              {description.split("\n").map((line, index) => {
                if (line.startsWith("-"))
                  return (
                    <li key={index} className={styles["card-description"]}>
                      {line.slice(1)}
                    </li>
                  );
                else return <p key={index}>{line}</p>;
              })}
            </div>
            <div className={styles["card-tags"]}>
              {tags.map((tag, index) => (
                <span key={index} className={styles["card-tag"]}>
                  <span className={`text-gradient-mask-p1`}>{`#${tag}`}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleCard;
