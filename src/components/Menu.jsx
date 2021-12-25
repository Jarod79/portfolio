import React from "react";
import { Link } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  return (
    <div className="navigation" id="accueil">
      <div className="menu">
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
      </div>
    </div>
  );
};

export default Menu;
