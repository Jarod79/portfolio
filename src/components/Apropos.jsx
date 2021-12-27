import "./apropos.css";
import Code from "../img/code.jpeg";

const Apropos = ({ changeCss }) => {
  return (
    <div className="aPropos">
      <h1>A Propos</h1>
      <div className={changeCss ? "aPropos_content" : "aPropos_content_b"}>
        <img
          src={Code}
          alt="CODE"
          className={changeCss ? "image" : "image_b"}
        />
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

export default Apropos;
