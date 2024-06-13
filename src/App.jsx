import { useState, useRef, useEffect } from 'react';
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { Conctact } from "./components/Contact";

function App() {
  const [filter, setFilter] = useState('Todos');
  const [currentSection, setCurrentSection] = useState(0);
  const sectionsRef = useRef([]);
  const [showPrevButton, setShowPrevButton] = useState(false);
const [showNextButton, setShowNextButton] = useState(true);

  useEffect(() => {
    sectionsRef.current = document.querySelectorAll("[data-section]");
  }, []);

  const scrollToSection = (index) => {
    if (index >= 0 && index < sectionsRef.current.length) {
      sectionsRef.current[index].scrollIntoView({ behavior: "smooth", block: 'nearest', inline: 'start' });
      setCurrentSection(index);
      
      setShowPrevButton(index > 0);
      setShowNextButton(index < sectionsRef.current.length - 1);
    }
  };
  

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    document.getElementById('Projects').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  };

  const handleNext = () => {
    scrollToSection(currentSection + 1);
  };

  const handlePrev = () => {
    scrollToSection(currentSection - 1);
  };

  return (
    <main className="contenedor">
      <NavBar />
      <Home onFilterChange={handleFilterChange} />
      <AboutMe />
      <Projects filter={filter} onFilterChange={handleFilterChange} />
      <Conctact />
     {showPrevButton && <button className="prevButton" onClick={handlePrev}>⬅</button>}
     {showNextButton && <button className="nextButton" onClick={handleNext}>➡</button>}
    </main>
  );
}

export default App;
