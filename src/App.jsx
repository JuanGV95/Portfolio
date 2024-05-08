import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";

function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
      <section className="mainContent">
        <section className="aboutMe">
          <article className="aboutMeInfo">
            <img src="./img/yo.jpeg" alt="imagen de mi persona" />
            <h1>Perfil</h1>
            <p>Desarrollador Full Stack con un enfoque práctico y una sólida base en el aprendizaje continuo. Mi conocimiento abarca tanto el front-end como el back-end, permitiéndome construir y optimizar aplicaciones web integrales. Valoro la colaboración en equipo y la mejora constante en un campo tecnológico que siempre avanza.</p>
            <div className="aboutMeFilterButtons">
            <button>Desarrollo Web</button>
            <button>React</button>
            <button>Javascript</button>
            <button>Programacion Backend</button>
            </div>
          </article>
          <article className="aboutMeEducation">
            <div className="aboutMeEducationOne">
              <h2>Educacion</h2>
              <div className="aboutMeEducationOneContent">
                <img src="./img/circle.svg" alt="imagen de un circulo rojo" />
                <div>
                  <div className="aboutMeEducationOneTitle">
                  <h3>Desarrollador Full Stack</h3>
                  <p><span>CoderHouse</span></p>
                  <p>Marzo 2023 - Actualmente</p>
                  </div>
                  <p>Desarrollo de api tipo e-commerce, manejo de rutas y puertos, integración de base de datos con Mongo DB y node js, uso de loggers, testeos con Chai, mocha y super test, montaje de servidor virtual con railway, manejo de errores con diferentes niveles de Logger.</p>
                </div>
              </div>
              <div className="aboutMeEducationOneContent">
                <img src="./img/circle.svg" alt="imagen de un circulo rojo" />
                <div>
                  <div className="aboutMeEducationOneTitle">
                  <h3>Inglés C1</h3>
                  <p><span>Centro Cultural Colombo Americano</span></p>
                  <p>Abril  - Junio 2022</p>
                  </div>
                </div>
              </div>
            </div>
            <article className="KyS">
              <div className="knowledge">
                <h2>Conocimiento</h2>               
                  <div className="knowledgeList">
                    <p><img src="./img/circle.svg" alt="imagen de un circulo rojo" />Desarrollo Web HTML, CSS, JS</p>
                    <p><img src="./img/circle.svg" alt="imagen de un circulo rojo" />React</p>
                    <p><img src="./img/circle.svg" alt="imagen de un circulo rojo" />Node js</p>
                    <p><img src="./img/circle.svg" alt="imagen de un circulo rojo" />Express</p>
                    <p><img src="./img/circle.svg" alt="imagen de un circulo rojo" />Mongo DB</p>
                    <p><img src="./img/circle.svg" alt="imagen de un circulo rojo" />GIT & GitHub</p>
                    <p><img src="./img/circle.svg" alt="imagen de un circulo rojo" />SCRUM</p>
                  </div>
              </div>
              <div className="software">
                <h2>Software</h2>
                <div className="softwareList">
                  <p><img src="./img/vsc.svg" alt="imagen de un circulo rojo" />Visual Studio Code</p>
                  <p><img src="./img/figma.svg" alt="imagen de un circulo rojo" />Figma</p>
                  <p><img src="./img/github.svg" alt="imagen de un circulo rojo" />Github</p>
                  <p><img src="./img/notion.svg" alt="imagen de un circulo rojo" />Notion</p>
                </div>
              </div>
            </article>           
          </article>
        </section>
      </section>
    </main>
  );
}

export default App;
