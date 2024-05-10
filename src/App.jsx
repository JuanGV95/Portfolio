import "./App.css";

import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import {AboutMe} from "./components/AboutMe";


function App() {

  return (
    <main className="contenedor">     
        <NavBar/>
        <Home/>
        <AboutMe/>
        
    </main>
  );
}

export default App;
