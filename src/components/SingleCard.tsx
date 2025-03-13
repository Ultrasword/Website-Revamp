import styles from "./styles/SingleCard.module.css";

import Image from "next/image";

export interface SingleCardProps {
  index: number;
  title: string;
  description: string[];
  image: string;
  tags: string[];
  github: string;
}

const createImageObject = (image: string, startOrEnd: string, github: string) => {
  return (
    <div>
      <div
        className={styles["image-container"]}
        style={{ display: "flex", justifyContent: `flex-${startOrEnd}` }}
        onClick={() => {
          window.open(github);
        }}
      >
        <Image
          src={image}
          alt={image}
          width={300}
          height={300}
          style={{
            objectFit: "cover",
            aspectRatio: "1 / 1",
            borderRadius: "10px",
          }}
        />
      </div>
      {github ? (
        <span style={{ display: "flex", justifyContent: `flex-${startOrEnd}`, padding: "10px" }}>
          Click image to check out Github!
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export function SingleCard({ index, title, description, image, tags, github }: SingleCardProps) {
  return (
    <div className={styles["container"]}>
      <div className={styles["container-sub"]}>
        {index % 2 != 0 ? createImageObject(image, "start", github) : ""}

        <div className={styles["content"]}>
          <div>
            <h2 className={styles["card-title"]}>{title}</h2>
          </div>
          <div className={styles["card-tags"]}>
            {tags.map((tag, index) => (
              <span key={index} className={styles["card-tag"]}>
                <span className={`text-gradient-mask-p1`}>{`#${tag}`}</span>
              </span>
            ))}
          </div>
          <div className={styles["card-description-container"]}>
            <ul>
              {description.map((line, index) => {
                return (
                  <li
                    key={index}
                    className={styles["card-description"]}
                    dangerouslySetInnerHTML={{ __html: line }}
                  />
                );
              })}
            </ul>
          </div>
        </div>

        {index % 2 == 0 ? createImageObject(image, "end", github) : ""}
      </div>
    </div>
  );
}
