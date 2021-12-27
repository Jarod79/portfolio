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
import Footer from "./components/footer";

const App = () => {
  const [change, setChange] = useState(true);
  return (
    <div className="App">
      <HashRouter basename="/">
        {change && <BackgroundVideo changeVideo={change} />}
        {!change && <BackgroundVideoEarth changeVideo={change} />}
        <Menu change={change} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Apropos" element={<Apropos changeCss={change} />} />
          <Route path="/Competences" element={<Competences />} />
          <Route path="/Portfolio" element={<Portfolio changeCss={change} />} />
          <Route path="/Contact" element={<Contact change={change} />} />
        </Routes>
        <Footer change={change} setChange={setChange} />
      </HashRouter>
    </div>
  );
};

export default App;
