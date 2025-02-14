import styles from "./SingleCardViewer.module.css";
import React, { useRef } from "react";

import SingleCard from "./SingleCard";

const SingleCardViewer = () => {
  // get all child objects that are of type SingleCard
  const cardProps = [
    {
      title: "Python + Django + Flask",
      description:
        "A high-level programming language used for general-purpose programming.\nI use this language for:\n-data analysis\n-web development\n-automation.",
      image: "/skillcards/image1.jpg",
      tags: ["Game", "Full Stack Development"],
    },
    {
      title: "Java + JSP + Spring",
      description:
        "A general-purpose programming language that is class-based and object-oriented.\nI use this language for:\n-Android development\n-Game development\n-Web development.",
      image: "/skillcards/image2.jpg",
      tags: ["Game", "Android", "Web"],
    },
    {
      title: "C/C++",
      description:
        "A general-purpose programming language that is used for system programming.\nI use this language for:\n-Game development\n-System programming.",
      image: "/skillcards/image3.jpg",
      tags: ["Game", "System Programming"],
    },
    {
      title: "React + Next.js",
      description:
        "A JavaScript library for building user interfaces.\nI use this library for:\n-Web development\n-UI/UX design.",
      image: "/skillcards/image4.jpg",
      tags: ["Web", "UI/UX"],
    },
    {
      title: "PostgreSQL + MySQL + MongoDB",
      description:
        "A powerful, open-source object-relational database system.\nI use this database for:\n-Data storage\n-Data retrieval.",
      image: "/skillcards/image5.jpg",
      tags: ["Database", "Data Storage"],
    },
  ];

  // create refs
  const cardsList = useRef<HTMLDivElement>(null);
  const cardsViewer = useRef<HTMLDivElement>(null);
  const [selectedCard, setSelectedCard] = React.useState(0);

  return (
    <div className={styles["card-container"]}>
      <div ref={cardsList} className={styles["container-left"]}>
        {cardProps.map((card, index) => (
          <div
            key={index}
            onClick={() => setSelectedCard(index)}
            className={styles["single-card-list"]}
          >
            <div className={styles["single-card-list-title"]}>
              <p>{card.title}</p>
            </div>
            <div>
              <div className={styles["single-card-left-list"]}>
                {card.tags.map((tag, index) => (
                  <span key={index} className={styles["card-tag"]}>
                    <span
                      className={`text-gradient-mask-p1`}
                      style={{ fontSize: "13px" }}
                    >{`#${tag}`}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div ref={cardsViewer} className={styles["container-right"]}>
        <SingleCard
          title={cardProps[selectedCard].title}
          description={cardProps[selectedCard].description}
          image={cardProps[selectedCard].image}
          tags={cardProps[selectedCard].tags}
        />
      </div>
    </div>
  );
};

export default SingleCardViewer;
