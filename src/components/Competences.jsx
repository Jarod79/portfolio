import "./competences.css";
import Code from "../img/code.jpeg";

const Competences = () => {
  return (
    <div className="competences" id="competences">
      <h1>Compétences</h1>
      <div className="competences_img">
        <img src={Code} alt="CODE" />
      </div>
      <div className="competences_content">
        <p>
          Fan de nouvelles technologies, et aimant apprendre, j’ai décidé de
          faire de ma passion mon métier. Ayant toujours été attiré par le
          métier de développeur web, et après une vingtaines d’années riches en
          diverses expériences professionnelles, j’ai décidé de me reconvertir
          dans le numérique. Actuellement en formation développeur web junior à
          la Wild Code School, je souhaite par la suite poursuivre mon
          apprentissage. Je suis donc à la recherche d’une alternance ou d’un
          stage à partir de Février 2022.
        </p>
      </div>
    </div>
  );
};

export default Competences;
