// AppContent.jsx
import { useState, useRef, useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { NavBar } from "./NavBar";
import { Home } from "./Home";
import { AboutMe } from "./AboutMe";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { ProjectDetail } from './ProjectDetail';

const AppContent = () => {
  const [filter, setFilter] = useState('Todos');
  const [currentSection, setCurrentSection] = useState(0);
  const sectionsRef = useRef([]);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);

  const location = useLocation();

  useEffect(() => {
    sectionsRef.current = document.querySelectorAll("[data-section]");
  }, []);

  useEffect(() => {
    const isProjectDetailPage = location.pathname.startsWith("/project/");
    setShowPrevButton(!isProjectDetailPage && currentSection > 0);
    setShowNextButton(!isProjectDetailPage && currentSection < sectionsRef.current.length - 1);
  }, [location, currentSection]);

  const scrollToSection = (index) => {
    if (index >= 0 && index < sectionsRef.current.length) {
      sectionsRef.current[index].scrollIntoView({ behavior: "smooth", block: 'nearest', inline: 'start' });
      setCurrentSection(index);
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
      <Routes>
        <Route path="/" element={
          <>
            <Home onFilterChange={handleFilterChange} />
            <AboutMe />
            <Projects filter={filter} onFilterChange={handleFilterChange} />
            <Contact />
            {showPrevButton && <button className="prevButton" onClick={handlePrev}><img src="./img/arrowGuideLeft.svg" alt="Flecha de navegacion" /></button>}
            {showNextButton && <button className="nextButton" onClick={handleNext}><img src="./img/arrowGuideRight.svg" alt="Flecha de navegacion" /></button>}
          </>
        } />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </main>
  );
};

export default AppContent;
