export const NavBar = () => {
    return (
        <section className="aside">
        <nav className="navegation">
          <a href="">
            <img src="../img/home.svg" alt="icono de inicio" />
            Inicio
          </a>
          <a href="">
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
        </nav>
        <button className="translateButton">
          <img src="img/iconLanguage.svg" alt="icono de traducir idioma" />
          Español
        </button>
      </section>
    )
}