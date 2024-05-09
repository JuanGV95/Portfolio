
import "./App.css";

import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import {AboutMe} from "./components/AboutMe";

function App() {
  return (
    <main className="container">
      
        <NavBar />
      <section className="mainContent">
        <Home />
        <AboutMe/>
      </section>
    </main>
  );
}

export default App;
