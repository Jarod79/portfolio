import { useState } from "react";
import "./portfolio.css";
import Shoe from "../img/Shoe.png";
import Wild from "../img/Wild.png";
import Olentzero from "../img/Olentzero.png";

const Portfolio = () => {
  const [hoverShoe, setHoverShoe] = useState(true);
  const [hoverWild, setHoverWild] = useState(true);
  const [hoverOlen, setHoverOlen] = useState(true);
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio_content">
        {hoverShoe && (
          <a
            href="https://jarod79.github.io/Shoe-Shepherd-Site/"
            target="blank"
            className="content_shoe"
            onMouseEnter={() => setHoverShoe(false)}
          >
            <img src={Shoe} alt="Shoe shepherd" />
          </a>
        )}
        {!hoverShoe && (
          <a
            href="https://jarod79.github.io/Shoe-Shepherd-Site/"
            target="blank"
            className="content_shoe"
            onMouseLeave={() => setHoverShoe(true)}
          >
            <p>
              Premier projet de la formation, un site pour la sauvegarde des
              chaussures abandonnées. Javascript, HTML, CSS, Github.
            </p>
          </a>
        )}
        {hoverWild && (
          <a
            href="https://jarod79.github.io/wild-heroes/#/"
            target="blank"
            className="content_wild"
            onMouseEnter={() => setHoverWild(false)}
          >
            <img src={Wild} alt="Wild Heroes" />
          </a>
        )}
        {!hoverWild && (
          <a
            href="https://jarod79.github.io/wild-heroes/#/"
            target="blank"
            className="content_wild"
            onMouseLeave={() => setHoverWild(true)}
          >
            <p>
              Deuxième projet de la formation, basé sur une API de super-héros.
              Javascript, React, CSS, Api rest, Github.
            </p>
          </a>
        )}
        {hoverOlen && (
          <a
            href="https://jarod79.github.io/olentzero-music/"
            target="blank"
            className="content_olentzero"
            onMouseEnter={() => setHoverOlen(false)}
          >
            <img src={Olentzero} alt="Olentzero" />
          </a>
        )}
        {!hoverOlen && (
          <a
            href="https://jarod79.github.io/olentzero-music/"
            target="blank"
            className="content_olentzero"
            onMouseLeave={() => setHoverOlen(true)}
          >
            <p>
              Projet de calendrier de l'avent, lors d'un hackaton de 30 heures.
              Javascript, React, CSS, Github.
            </p>
          </a>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
