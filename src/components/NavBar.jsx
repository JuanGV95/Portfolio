import { useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
  const navegationRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleNavClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href').slice(1);
      navigate(`/#${targetId}`);
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start'
          });
        }
      }, 100);
    };

    const links = navegationRef.current.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', handleNavClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleNavClick);
      });
    };
  }, [navigate]);

  return (
    <section className="aside">
      <div className="navegation" ref={navegationRef}>
        <a href="#Home">
          <img src="../img/home.svg" alt="icono de inicio" />
          Inicio
        </a>
        <a href="#AboutMe">
          <img src="../img/iconMe.svg" alt="icono de perfil" />
          Sobre mi
        </a>
        <a href="#Projects">
          <img src="../img/iconFolder.svg" alt="icono de ficheros" />
          Mis proyectos
        </a>
        <a href="#Contact">
          <img src="../img/iconMail.svg" alt="icono de contacto" />
          Contacto
        </a>
      </div>
      <button className="translateButton">
        <img src="img/iconLanguage.svg" alt="icono de traducir idioma" />
        Español
      </button>
    </section>
  );
};
