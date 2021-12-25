import React from "react";
import { Link } from "react-router-dom";
import "./menu.css";
import git from "../img/git.png";
import linkedin from "../img/Linkedin.png";

const Menu = () => {
  return (
    <div className="navigation" id="accueil">
      <div className="menu">
        <a
          href="https://www.linkedin.com/in/eric-arrijuria-a64990/"
          target="blank"
          className="menu_link_social"
        >
          <img src={linkedin} alt="Linkedin" className="linkedin" />
        </a>
        <Link className="menu_link" to="/">
          ACCUEIL
        </Link>
        <Link className="menu_link" to="/Apropos">
          A PROPOS
        </Link>
        <Link className="menu_link" to="/Competences">
          COMPETENCES
        </Link>
        <Link className="menu_link" to="/portfolio">
          PORTFOLIO
        </Link>
        <Link className="menu_link" to="/contact">
          CONTACT
        </Link>
        <a
          href="https://github.com/Jarod79"
          target="blank"
          className="menu_link_social"
        >
          <img src={git} alt="GitHub" className="git" />
        </a>
      </div>
    </div>
  );
};

export default Menu;
