import styles from "./styles/SingleCard.module.css";
import { useState } from "react";
import Image from "next/image";

export interface SingleCardProps {
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
          className={styles["content-image"]}
        />
      </div>
      {github ? (
        <div className={styles["github-link"]}>
          <span style={{ display: "flex", justifyContent: `flex-${startOrEnd}`, padding: "10px" }}>
            Click image to check out Github!
          </span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export function SingleCard({
  index,
  title,
  description,
  image,
  tags,
  github,
}: { index: number } & SingleCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(true);
  };

  const handleUnflip = () => {
    setIsFlipped(false);
  };

  return (
    <div>
      {/* Layout for smaller screens */}
      <div className={styles["container-sub800"]}>
        <div className={styles["container-sub-parent"]}>
          {/* styles["container-sub"] is the one with perspective in CSS for this viewport */}
          <div className={styles["container-sub"]}>
            <div className={`${styles['card-wrapper']} ${isFlipped ? styles['is-flipped'] : ''}`}>
              {/* Front of the card */}
              <div className={styles['card-front']}>
                {/* Content for the front */}
                <div className={styles["content"]}> {/* Existing content div, now part of card-front */}
                  <div className={styles["container-sub-800"]}> {/* This is the grid for image and title */}
                    <div>{createImageObject(image, "start", github)}</div>
                    <div>
                      <h2 className={styles["card-title"]}>{title}</h2>
                    </div>
                  </div>
                  <div className={styles["card-tags"]}>
                    {tags.map((tag, i) => (
                      <span key={i} className={styles["card-tag"]}>
                        <span className={`text-gradient-mask-p1`}>{`#${tag}`}</span>
                      </span>
                    ))}
                  </div>
                  <div className={styles["card-description-container"]}>
                    <ul>
                      {description.map((line, i) => (
                        <li
                          key={i}
                          className={styles["card-description"]}
                          dangerouslySetInnerHTML={{ __html: line }}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Flip button removed */}
                {!isFlipped && (
                  <div className={styles['corner-flip-trigger']} onClick={handleFlip} />
                )}
              </div>

              {/* Back of the card */}
              <div className={styles['card-back']}>
                <div>no video attached</div>
                {isFlipped && (
                  <button onClick={handleUnflip} className={styles['back-button']}>
                    Back
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Layout for larger screens */}
      <div className={styles[`container-${index % 2 === 0 ? "a" : "b"}`]}>
        <div className={styles["container-sub-parent"]}>
          {/* styles["container-sub"] is the one with perspective in CSS for this viewport */}
          <div className={styles["container-sub"]}>
            <div className={`${styles['card-wrapper']} ${isFlipped ? styles['is-flipped'] : ''}`}>
              {/* Front of the card */}
              <div className={styles['card-front']}>
                {/* Conditional rendering for image placement based on index */}
                {index % 2 !== 0 && createImageObject(image, "start", github)}
                <div className={styles["content"]}> {/* Existing content div, now part of card-front */}
                  <div>
                    <h2 className={styles["card-title"]}>{title}</h2>
                  </div>
                  <div className={styles["card-tags"]}>
                    {tags.map((tag, i) => (
                      <span key={i} className={styles["card-tag"]}>
                        <span className={`text-gradient-mask-p1`}>{`#${tag}`}</span>
                      </span>
                    ))}
                  </div>
                  <div className={styles["card-description-container"]}>
                    <ul>
                      {description.map((line, i) => (
                        <li
                          key={i}
                          className={styles["card-description"]}
                          dangerouslySetInnerHTML={{ __html: line }}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
                {index % 2 === 0 && createImageObject(image, "end", github)}
                {/* Flip button removed */}
                {!isFlipped && (
                  <div className={styles['corner-flip-trigger']} onClick={handleFlip} />
                )}
              </div>

              {/* Back of the card */}
              <div className={styles['card-back']}>
                <div>no video attached</div>
                {isFlipped && (
                  <button onClick={handleUnflip} className={styles['back-button']}>
                    Back
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
