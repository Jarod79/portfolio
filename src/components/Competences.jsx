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
        <div className="competences_language">
          <p>Javascript</p>
          <p>HTML5</p>
          <p>CSS3</p>
          <p>React</p>
          <p>Node Js</p>
          <p>Express</p>
          <p>GitHub</p>
          <p>Mysql</p>
          <p>Méthode Agile</p>
        </div>
      </div>
    </div>
  );
};

export default Competences;
