export const Home = () =>{
    return (
        <section className="landingPage">
          
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
            <button>HTML, CSS, JS</button>
            <button>React</button>
            <button>Node js</button>
            <button>Express</button>
            <button>Mongo DB</button>
          </article>
          
          <article className="landingMedias">
            <a href="">
              <img src="./img/gitLogo.svg" alt="logo de github" />
            </a>
            <a href="">
              <img src="./img/inLogo.svg" alt="logo de linkedin" />
            </a>
            <button>Decargar CV</button>
          </article>
        </section>
    )
}