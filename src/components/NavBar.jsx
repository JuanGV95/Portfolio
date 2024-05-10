import { useRef } from "react";

export const NavBar = () => {
  const navegationRef = useRef(null);

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
        <a href="">
          <img src="../img/iconFolder.svg" alt="icono de ficheros" />
          Mis proyectos
        </a>
        <a href="">
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
