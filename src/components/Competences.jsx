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
          <div>
            <p>Javascript</p>
            <p>PHP</p>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>React</p>
            <p>Next JS</p>
            <p>Node Js</p>
          </div>
          <div>
            <p>Sass</p>
            <p>Express</p>
            <p>GitHub</p>
            <p>Mysql</p>
            <p>Wordpress</p>
            <p>Prestashop</p>
            <p>Méthode Agile</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competences;
