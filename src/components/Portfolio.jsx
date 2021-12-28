import { useState } from "react";
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

      <div className="portfolio_container">
        <div className="portfolio_card">
          <div className="title_project">
            <h2>Shoe Shepherd</h2>
          </div>
          <div
            className={changeCss ? "portfolio_content" : "portfolio_content_b"}
          >
            {hoverShoe && (
              <a
                href="https://jarod79.github.io/Shoe-Shepherd-Site/"
                target="blank"
                className="content_link"
                onMouseEnter={() => setHoverShoe(false)}
              >
                <img src={Shoe} alt="Shoe_shepherd" />
              </a>
            )}
            {!hoverShoe && (
              <>
                <a
                  href="https://jarod79.github.io/Shoe-Shepherd-Site/"
                  target="blank"
                  className="content_phone"
                  onMouseEnter={() => setHoverShoe(false)}
                >
                  <img src={Shoe} alt="Shoe_shepherd" />
                </a>
                <a
                  href="https://jarod79.github.io/Shoe-Shepherd-Site/"
                  target="blank"
                  className="content_hover"
                  onMouseLeave={() => setHoverShoe(true)}
                >
                  Premier projet de la formation, un site pour la sauvegarde des
                  chaussures abandonnées. Javascript, HTML, CSS, Github.
                </a>
              </>
            )}
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
            {hoverWild && (
              <a
                href="https://jarod79.github.io/wild-heroes/#/"
                target="blank"
                className="content_link"
                onMouseEnter={() => setHoverWild(false)}
              >
                <img src={Wild} alt="Wild Heroes" />
              </a>
            )}
            {!hoverWild && (
              <>
                <a
                  href="https://jarod79.github.io/wild-heroes/#/"
                  target="blank"
                  className="content_phone"
                  onMouseEnter={() => setHoverWild(false)}
                >
                  <img src={Wild} alt="Wild Heroes" />
                </a>
                <a
                  href="https://jarod79.github.io/wild-heroes/#/"
                  target="blank"
                  className="content_hover"
                  onMouseLeave={() => setHoverWild(true)}
                >
                  Deuxième projet de la formation, basé sur une API de
                  super-héros. Javascript, React, CSS, Api rest, Github.
                </a>
              </>
            )}
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
            {hoverOlen && (
              <a
                href="https://jarod79.github.io/olentzero-music/"
                target="blank"
                className="content_link"
                onMouseEnter={() => setHoverOlen(false)}
              >
                <img src={Olentzero} alt="Olentzero" />
              </a>
            )}
            {!hoverOlen && (
              <>
                <a
                  href="https://jarod79.github.io/olentzero-music/"
                  target="blank"
                  className="content_phone"
                  onMouseLeave={() => setHoverOlen(true)}
                >
                  <img src={Olentzero} alt="Olentzero" />
                </a>
                <a
                  href="https://jarod79.github.io/olentzero-music/"
                  target="blank"
                  className="content_hover"
                  onMouseLeave={() => setHoverOlen(true)}
                >
                  Projet de calendrier de l'avent, lors d'un hackaton de 30
                  heures. Javascript, React, CSS, Github.
                </a>
              </>
            )}
          </div>
          <p className="content_phone_paragraph">
            Projet de calendrier de l'avent, lors d'un hackaton de 30 heures.
            Javascript, React, CSS, Github.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
