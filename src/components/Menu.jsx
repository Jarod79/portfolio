import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";
import git from "../img/git.png";
import linkedin from "../img/Linkedin.png";
import Burger from "../img/burger.png";

const Menu = ({ change }) => {
  const [burgerButton, setBurgerButton] = useState(false);
  return (
    <div className="navigation">
      {!burgerButton && (
        <div className={change ? "menu" : "menu_b"}>
          <a
            href="https://www.linkedin.com/in/eric-arrijuria-a64990/"
            target="blank"
            className="menu_link_social"
          >
            <img src={linkedin} alt="Linkedin" className="linkedin" />
          </a>
          <NavLink activeclassname="active" className="menu_link" to="/">
            ACCUEIL
          </NavLink>
          <NavLink activeclassname="active" className="menu_link" to="/Apropos">
            A PROPOS
          </NavLink>
          <NavLink
            activeclassname="active"
            className="menu_link"
            to="/Competences"
          >
            COMPETENCES
          </NavLink>
          <NavLink
            activeclassname="active"
            className="menu_link"
            to="/portfolio"
          >
            PORTFOLIO
          </NavLink>
          <NavLink activeclassname="active" className="menu_link" to="/contact">
            CONTACT
          </NavLink>
          <a
            href="https://github.com/Jarod79"
            target="blank"
            className="menu_link_social"
          >
            <img src={git} alt="GitHub" className="git" />
          </a>
        </div>
      )}
      <button
        className={change ? "menu_button" : "menu_button_b"}
        onClick={() => setBurgerButton(!burgerButton)}
      >
        <img src={Burger} alt="Burger bouton" />
      </button>
    </div>
  );
};

export default Menu;
