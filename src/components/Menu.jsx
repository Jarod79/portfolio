import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";
import git from "../img/git.png";
import linkedin from "../img/Linkedin.png";

const Menu = ({ change, setChange }) => {
  return (
    <div className="navigation" id="accueil">
      <div className={change ? "menu" : "menu_b"}>
        <a
          href="https://www.linkedin.com/in/eric-arrijuria-a64990/"
          target="blank"
          className="menu_link_social"
        >
          <img src={linkedin} alt="Linkedin" className="linkedin" />
        </a>
        <NavLink activeClassName="active" className="menu_link" to="/">
          ACCUEIL
        </NavLink>
        <NavLink activeClassName="active" className="menu_link" to="/Apropos">
          A PROPOS
        </NavLink>
        <NavLink
          activeClassName="active"
          className="menu_link"
          to="/Competences"
        >
          COMPETENCES
        </NavLink>
        <NavLink activeClassName="active" className="menu_link" to="/portfolio">
          PORTFOLIO
        </NavLink>
        <NavLink activeClassName="active" className="menu_link" to="/contact">
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
    </div>
  );
};

export default Menu;
