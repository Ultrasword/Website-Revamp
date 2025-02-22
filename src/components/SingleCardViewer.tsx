import styles from "./styles/SingleCardViewer.module.css";
import React, { useRef } from "react";

import SingleCard from "./SingleCard";

const SingleCardViewer = () => {
  // get all child objects that are of type SingleCard
  const cardProps = [
    {
      title: "Portfolio Website",
      description:
        "I built this website using Next.js, React, and TypeScript.\nIt was deployed on Vercel and setup using my custom domain.",
      image: "/projects/p1.png",
      tags: ["ThreeJS", "React", "Next.js"],
      github: "https://github.com/Peter-Dated-Projects/02-10-2025_personal-website",
    },
    {
      title: "SoraGL: 3D Game Engine",
      description:
        "I created a fully-functional 3D game engine using Python and OpenGL.\nIt was used to create a variety of games and simulations.\nCurrently I'm using it to build a 2D bullet-hell game.",
      image: "/projects/p2.gif",
      tags: ["Python", "OpenGL"],
      github: "https://github.com/Peter-Dated-Projects/01-19-2025_soragl-game-engine",
    },
    {
      title: "Raytracer Engine",
      description:
        "I built a raytracer engine using C++.\nIt was used to render 3D scenes and create animations.\nI also implemented multi-core processing for faster rendering.",
      image: "/projects/p3.png",
      tags: ["C++", "RTX"],
      github: "https://github.com/Peter-Dated-Projects/01-13-2025_ray-tracing-project",
    },
    {
      title: "Desktop Assistant",
      description:
        "A JavaScript library for building user interfaces.\nI use this library for:\n-Web development\n-UI/UX design.",
      image: "/skillcards/image3.gif",
      tags: ["AppDev", "AI/ML"],
      github: "https://github.com/Peter-Dated-Projects/02-18-2025_desktop-pet-assistant",
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
