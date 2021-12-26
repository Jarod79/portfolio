import "./competences.css";
import Logo from "../img/LogoJs.png";
import Cv from "../cv/cv.pdf";

const Competences = () => {
  return (
    <div className="competences">
      <h1>Compétences</h1>
      <div className="competences_content">
        <div className="competences_content_left">
          <img src={Logo} alt="CODE" />
          <a className="link_cv" href={Cv} download="Eric-Arrijuria:CV.pdf">
            Télécharger mon C.V
          </a>
        </div>
        <p>
          Javascript <br /> HTML5
          <br /> CSS3 <br />
          React
          <br /> Node Js
          <br /> Express
          <br /> GitHub
          <br /> Mysql
          <br />
          Méthode Agile
          <br />
        </p>
      </div>
    </div>
  );
};

export default Competences;
