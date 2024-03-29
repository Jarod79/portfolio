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
        Fan de nouvelles technologies, et aimant apprendre, j’ai décidé de faire
        de ma passion mon métier. Ayant toujours été attiré par le métier de
        développeur web, et après une vingtaine d’années riches en diverses
        expériences professionnelles, j’ai décidé de mettre à profit mes
        compétences acquises pour me lancer dans le numérique. Après avoir suivi la formation de Développeur web junior à la Wild Code School à Biarritz, me voilà aujourd'hui développeur web.
        </p>
      </div>
    </div>
  );
};

export default Apropos;
