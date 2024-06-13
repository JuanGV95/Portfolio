import { useState } from 'react';
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { Conctact } from "./components/Contact";

function App() {
  const [filter, setFilter] = useState('Todos');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    document.getElementById('Projects').scrollIntoView({ behavior: 'smooth', inline: 'start' });
  };

  return (
    <main className="contenedor">
      <NavBar />
      <Home onFilterChange={handleFilterChange} />
      <AboutMe />
      <Projects filter={filter} onFilterChange={handleFilterChange} />
      <Conctact />
    </main>
  );
}

export default App;
