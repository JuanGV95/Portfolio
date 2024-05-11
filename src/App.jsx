import "./App.css";

import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { AboutMe } from "./components/AboutMe";
import { Conctact } from "./components/Contact";


function App() {

  return (
    <main className="contenedor">     
        <NavBar/>
        <Home/>
        <AboutMe/>
        <Conctact/>
    </main>
  );
}

export default App;
