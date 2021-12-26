import { useState } from "react";
import "./portfolio.css";
import Shoe from "../img/Shoe.png";
import Wild from "../img/Wild.png";
import Olentzero from "../img/Olentzero.png";

const Portfolio = ({ changeCss }) => {
  const [hoverShoe, setHoverShoe] = useState(true);
  const [hoverWild, setHoverWild] = useState(true);
  const [hoverOlen, setHoverOlen] = useState(true);
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="title_project">
        <h2>Shoe Shepherd</h2>
        <h2>Wild Heroes</h2>
        <h2>Olentzero</h2>
      </div>

      <div className={changeCss ? "portfolio_content" : "portfolio_content_b"}>
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
            Premier projet de la formation, un site pour la sauvegarde des
            chaussures abandonnées. Javascript, HTML, CSS, Github.
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
            Deuxième projet de la formation, basé sur une API de super-héros.
            Javascript, React, CSS, Api rest, Github.
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
            Projet de calendrier de l'avent, lors d'un hackaton de 30 heures.
            Javascript, React, CSS, Github.
          </a>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
