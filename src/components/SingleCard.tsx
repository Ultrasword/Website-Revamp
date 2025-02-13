import styles from "./SingleCardViewer.module.css";
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
            <Image src={image} alt={title} width={300} height={300} />
          </div>
          <div className={styles["single-card-right"]}>
            <div>
              <p className={styles["card-description"]}>{description}</p>
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
