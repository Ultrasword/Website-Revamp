import styles from "./SingleCardViewer.module.css";
import React, { useRef } from "react";

import SingleCard from "./SingleCard";

const SingleCardViewer = () => {
  // get all child objects that are of type SingleCard
  const cardProps = [
    {
      title: "Conway's Game of Life",
      description: "A simple implementation of Conway's Game of Life.",
      image: "/skillcards/image1.jpg",
      tags: ["Game", "Simulation", "Cellular Automata"],
    },
    {
      title: "Portfolio",
      description: "A simple portfolio website.",
      image: "/skillcards/image2.jpg",
      tags: ["Website", "Portfolio"],
    },
    {
      title: "Snake",
      description: "A simple implementation of the classic game Snake.",
      image: "/skillcards/image3.gif",
      tags: ["Game", "Classic"],
    },
    {
      title: "Tetris",
      description: "A simple implementation of the classic game Tetris.",
      image: "/skillcards/image4.jpg",
      tags: ["Game", "Classic"],
    },
    {
      title: "Pong",
      description: "A simple implementation of the classic game Pong.",
      image: "/skillcards/image5.jpg",
      tags: ["Game", "Classic"],
    },
    {
      title: "Space Invaders",
      description: "A simple implementation of the classic game Space Invaders.",
      image: "/skillcards/image6.jpg",
      tags: ["Game", "Classic"],
    },
    {
      title: "Pong",
      description: "A simple implementation of the classic game Pong.",
      image: "/skillcards/image5.jpg",
      tags: ["Game", "Classic"],
    },
    {
      title: "Space Invaders",
      description: "A simple implementation of the classic game Space Invaders.",
      image: "/skillcards/image6.jpg",
      tags: ["Game", "Classic"],
    },
    {
      title: "Pong",
      description: "A simple implementation of the classic game Pong.",
      image: "/skillcards/image5.jpg",
      tags: ["Game", "Classic"],
    },
    {
      title: "Space Invaders",
      description: "A simple implementation of the classic game Space Invaders.",
      image: "/skillcards/image6.jpg",
      tags: ["Game", "Classic"],
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
            <div>
              <p>{card.title}</p>
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
