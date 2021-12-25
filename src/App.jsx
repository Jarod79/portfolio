import "./App.css";
import Menu from "./components/Menu";
import { Routes, HashRouter, Route } from "react-router-dom";
import Apropos from "./components/Apropos";
import Competences from "./components/Competences";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import BackgroundVideo from "./components/BackgroundVideo";

const App = () => {
  return (
    <div className="App">
      <HashRouter basename="/">
        <BackgroundVideo />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="/Competences" element={<Competences />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
