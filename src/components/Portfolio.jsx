import React from "react";
import Shoe from "../img/Shoe.png";
import Wild from "../img/Wild.png";
import Olentzero from "../img/Olentzero.png";

const Portfolio = ({ changeCss }) => {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio_card">
        <div className="title_project">
          <h2>Shoe Shepherd</h2>
        </div>
        <div
          className={changeCss ? "portfolio_content" : "portfolio_content_b"}
        >
          <a
            href="https://jarod79.github.io/Shoe-Shepherd-Site/"
            target="blank"
            className="content_link"
          >
            <img src={Shoe} alt="Shoe_shepherd" />
            <p className={changeCss ? "content_hover" : "content_hover_b"}>
              Premier projet de la formation, un site pour la sauvegarde des
              chaussures abandonnées. Javascript, HTML, CSS, Github.
            </p>
          </a>
        </div>
        <p className="content_phone_paragraph">
          Premier projet de la formation, un site pour la sauvegarde des
          chaussures abandonnées. Javascript, HTML, CSS, Github.
        </p>
      </div>
      <div className="portfolio_card">
        <div className="title_project">
          <h2>Wild Heroes</h2>
        </div>
        <div
          className={changeCss ? "portfolio_content" : "portfolio_content_b"}
        >
          <a
            href="https://jarod79.github.io/wild-heroes/#/"
            target="blank"
            className="content_link"
          >
            <img src={Wild} alt="Wild Heroes" />
            <p className={changeCss ? "content_hover" : "content_hover_b"}>
              Deuxième projet de la formation, basé sur une API de super-héros.
              Javascript, React, CSS, Api rest, Github.
            </p>
          </a>
        </div>
        <p className="content_phone_paragraph">
          Deuxième projet de la formation, basé sur une API de super-héros.
          Javascript, React, CSS, Api rest, Github.
        </p>
      </div>
      <div className="portfolio_card">
        <div className="title_project">
          <h2>Olentzero</h2>
        </div>
        <div
          className={changeCss ? "portfolio_content" : "portfolio_content_b"}
        >
          <a
            href="https://jarod79.github.io/olentzero-music/"
            target="blank"
            className="content_link"
          >
            <img src={Olentzero} alt="Olentzero" />
            <p className={changeCss ? "content_hover" : "content_hover_b"}>
              Projet de calendrier de l'avent, lors d'un hackaton de 30 heures.
              Javascript, React, CSS, Github.
            </p>
          </a>
        </div>
        <p className="content_phone_paragraph">
          Projet de calendrier de l'avent, lors d'un hackaton de 30 heures.
          Javascript, React, CSS, Github.
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
