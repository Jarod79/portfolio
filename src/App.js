import "./App.css";
import Menu from "./components/Menu";
import Apropos from "./components/Apropos";
import Competences from "./components/Competences";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <Apropos />
        <Competences />
      </header>
    </div>
  );
};

export default App;
