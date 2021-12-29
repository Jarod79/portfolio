import "./css/allCss.css";
import "./App.css";
import { useState } from "react";
import Menu from "./components/Menu";
import { Routes, HashRouter, Route } from "react-router-dom";
import Apropos from "./components/Apropos";
import Competences from "./components/Competences";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import BackgroundVideo from "./components/BackgroundVideo";
import BackgroundVideoEarth from "./components/BackGroundVideoEarth";
import ButtonMenuBackground from "./components/ButtonMenuBackground";

const App = () => {
  const [change, setChange] = useState(true);
  const [burgerButton, setBurgerButton] = useState(true);
  return (
    <div className="App">
      <HashRouter basename="/">
        {change && <BackgroundVideo changeVideo={change} />}
        {!change && <BackgroundVideoEarth changeVideo={change} />}
        <ButtonMenuBackground
          change={change}
          setChange={setChange}
          burgerButton={burgerButton}
          setBurgerButton={setBurgerButton}
        />
        <Menu
          change={change}
          burgerButton={burgerButton}
          setBurgerButton={setBurgerButton}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Apropos" element={<Apropos changeCss={change} />} />
          <Route path="/Competences" element={<Competences />} />
          <Route path="/Portfolio" element={<Portfolio changeCss={change} />} />
          <Route path="/Contact" element={<Contact change={change} />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
