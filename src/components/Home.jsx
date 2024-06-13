import { CvDownload } from "../utils/DownloadCv";

export const Home = ({ onFilterChange }) => {
  return (
    <section id="Home" className="landingPage">
      <article className="landingName">
        <h1>JUAN DAVID GONZÁLEZ</h1>
        <img src="./img/quote.svg" alt="imagen de Quotes" />
      </article>
      <article>
        <h2>Desarrollador FullStack</h2>
      </article>
      <article className="landingParagraph">
        <p>
          Con un enfoque práctico y una sólida base en el aprendizaje
          continuo. Mi conocimiento abarca tanto el front-end como el
          back-end.
        </p>
      </article>
      <article className="landingFilterButtons">
        <button onClick={() => onFilterChange('HTML, CSS')}>HTML, CSS, JS</button>
        <button onClick={() => onFilterChange('React')}>React</button>
        <button onClick={() => onFilterChange('Node js')}>Node js</button>
        <button onClick={() => onFilterChange('Express')}>Express</button>
        <button onClick={() => onFilterChange('Mongo DB')}>Mongo DB</button>
      </article>
      <article className="landingMedias">
        <a href="https://github.com/JuanGV95" target="_blank">
          <img src="./img/gitLogo.svg" alt="logo de github" />
        </a>
        <a href="https://www.linkedin.com/in/juan-david-gonz%C3%A1lez/" target="_blank">
          <img src="./img/inLogo.svg" alt="logo de linkedin" />
        </a>
        <button className="buttonDownload" onClick={CvDownload}>Descargar CV <img src="./img/down.svg" alt="imagen de descarga" /></button>
      </article>
    </section>
  );
};
