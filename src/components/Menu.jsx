import React from "react";
import { NavLink } from "react-router-dom";
import git from "../img/git.png";
import linkedin from "../img/Linkedin.png";

const Menu = ({ change, burgerButton, setBurgerButton }) => {
  return (
    <div className="navigation">
      <div
        className={change ? "menu" : "menu_b"}
        id={burgerButton ? "menu_show" : "menu_hide"}
      >
        <a
          href="https://www.linkedin.com/in/eric-arrijuria-a64990/"
          target="blank"
          className="menu_link_social"
        >
          <img
            src={linkedin}
            alt="Linkedin"
            className="linkedin"
            onClick={() => setBurgerButton(true)}
          />
        </a>
        <NavLink
          activeclassname="active"
          className="menu_link"
          to="/"
          onClick={() => setBurgerButton(true)}
        >
          ACCUEIL
        </NavLink>
        <NavLink
          activeclassname="active"
          className="menu_link"
          to="/Apropos"
          onClick={() => setBurgerButton(true)}
        >
          A PROPOS
        </NavLink>
        <NavLink
          activeclassname="active"
          className="menu_link"
          to="/Competences"
          onClick={() => setBurgerButton(true)}
        >
          COMPETENCES
        </NavLink>
        <NavLink
          activeclassname="active"
          className="menu_link"
          to="/portfolio"
          onClick={() => setBurgerButton(true)}
        >
          PORTFOLIO
        </NavLink>
        <NavLink
          activeclassname="active"
          className="menu_link"
          to="/contact"
          onClick={() => setBurgerButton(true)}
        >
          CONTACT
        </NavLink>
        <a
          href="https://github.com/Jarod79"
          target="blank"
          className="menu_link_social"
          onClick={() => setBurgerButton(true)}
        >
          <img src={git} alt="GitHub" className="git" />
        </a>
      </div>
    </div>
  );
};

export default Menu;
