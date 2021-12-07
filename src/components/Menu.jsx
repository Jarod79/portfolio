import { useEffect, useState } from "react";
import "./menu.css";

const Menu = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);
  console.log(scroll);
  return (
    <div className="navigation" id="accueil">
      <div className={scroll ? "menu_scroll" : "menu"}>
        <a href="#accueil"> ACCUEIL</a>
        <a href="#apropos"> A PROPOS</a>
        <a href="#competences">COMPETENCES</a>
        <a href="#portfolio">PORTFOLIO </a>
        <a href="#contact"> CONTACT</a>
      </div>
      <div className="navigation_img">
        <h1>ERIC ARRIJURIA</h1>
        <p>Développeur web junior</p>
      </div>
    </div>
  );
};

export default Menu;
