import "./App.css";

import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { AboutMe } from "./components/AboutMe";
import { Conctact } from "./components/Contact";
import { Projects } from "./components/Projects";


function App() {

  return (
    <main className="contenedor">
      <NavBar />
      <Home />
      <AboutMe />
      <Projects />
      <Conctact />
    </main>
  );
}

export default App;
