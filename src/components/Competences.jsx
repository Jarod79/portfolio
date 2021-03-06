import Logo from "../img/LogoJs.png";
import Cv from "../cv/cv.pdf";

const Competences = () => {
  return (
    <div className="competences">
      <h1>Compétences</h1>
      <div className="competences_content">
        <div className="competences_content_left">
          <img src={Logo} alt="CODE" />
          <h3>
            <a className="link_cv" href={Cv} download="Eric-Arrijuria:CV.pdf">
              Télécharger mon C.V
            </a>
          </h3>
        </div>
        <div className="competences_language">
          <p>Javascript</p>
          <p>HTML5</p>
          <p>CSS3</p>
          <p>Sql</p>
          <p>React</p>
          <p>Node Js</p>
          <p>Express</p>
          <p>GitHub</p>
          <p>Typescript</p>
          <p>Méthode Agile</p>
        </div>
      </div>
    </div>
  );
};

export default Competences;
