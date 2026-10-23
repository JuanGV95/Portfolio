/* ============ CONTENIDO EDITABLE ============
   Para agregar un proyecto: copia un bloque de PROYECTOS y cambia sus datos.
   Los textos van en español (es) e inglés (en). El filtro se genera con los "tags". */
const PROYECTOS = [
  {
    id: "twin-tides",
    imagen: "assets/img/TwinTides.png",
    tags: ["Unity 2D", "C#", "Pixelart"],
    url: "https://juandaara.itch.io/twin-tides", // enlace del botón "Ir al sitio" ("" lo oculta)
    es: {
      titulo: "Twin Tides",
      resumen: "Juego realizado para la Amix Jam 2026, en el que realice todas las mecánicas de movimiento, trampas e interacciones.",
      descripcion: "Tras un deslizamiento de tierra en la ribera del río, dos pequeñas nutrias mellizas quedan atrapadas en las ruinas de una antigua caverna. El lugar está envuelto en una oscuridad casi total, pero las paredes emiten extrañas señales luminosas que solo ellas pueden interpretar, aunque de forma fragmentada.",
      tema: "Señales",
      mecanica: "La mecanica principal del juego gira entorno a encontrar señales ocultas por diferentes tipos de visiones, señales en paredes, pisos y señales invisibles segun la visión que se active.",
      creditos: ["Juan David Gonzalez", "Mariana Hernandez", "Angie Fonseca"]
    },
    en: {
      titulo: "Twin Tides",
      resumen: "Game made for Amix Jam 2026, where I built all the movement mechanics, traps and interactions.",
      descripcion: "After a landslide on the riverbank, two young twin otters get trapped in the ruins of an ancient cave. The place is wrapped in near-total darkness, but the walls give off strange glowing signals that only they can interpret, though only in fragments.",
      tema: "Signals",
      mecanica: "The core mechanic is finding signals hidden by different kinds of vision: signals on walls, on floors and invisible signals, depending on which vision is active.",
      creditos: ["Juan David Gonzalez", "Mariana Hernandez", "Angie Fonseca"]
    }
  }
];
const LINKS = {
  github: "https://github.com/JuanGV95",
  linkedin: "https://www.linkedin.com/in/juan-david-gonzalez-velez-game-developer",
  itch: "https://juandaara.itch.io/",
  whatsapp: "https://w.app/ezgqtq",
  cv: "assets/CV.pdf"
};
const TXT = {
  es: {
    name: "Español", switchTo: "Cambiar a inglés", nav: ["Inicio", "Sobre mi", "Mis proyectos", "Contacto"],
    heroP: "Soy Desarrollador de videojuegos, enfocado en la programación de mecánicas de juego e interfaces interactivas. Mi pasión por los juegos es una combinación de lógica, creatividad y como muchas disciplinas juntas pueden crear una experiencia interactiva emocionante.",
    cv: "Descargar CV", profile: "Perfil",
    profileP: "Desarrollador de videojuegos especializado en crear mecánicas interactivas y sistemas estructurados, Mi experiencia abarca la programación en C#, el desarrollo de proyectos en Unity y el modelado 3D utilizando Blender. Me dedico a transformar ideas creativas en experiencias jugables, gestionando desde la lógica del comportamiento de personajes hasta la optimización del entorno.",
    edu: "Educación", eduList: [["Desarrollador Unity", "Generation", "Sep - Dic 2026"], ["Desarrollo de videojuegos y entornos interactivos", "SENA", "11/2024 - 08/2026"]],
    skills: "Conocimientos", skillList: ["C#", "Scripting", "Control de versiones", "Diseño de niveles", "QA Tester", "Modelado 3D"], soft: "Software",
    projects: "Mis proyectos", filter: "Filtro", all: "Todos", none: "No hay proyectos con este filtro.", tip: "Ir a detalles",
    back: "Volver a proyectos", theme: "Tema", credits: "Créditos", site: "Ir al sitio", notFound: "Proyecto no encontrado.",
    contact: "Contáctame", mail: "Correo", prev: "Sección anterior", next: "Sección siguiente"
  },
  en: {
    name: "English", switchTo: "Switch to Spanish", nav: ["Home", "About me", "My projects", "Contact"],
    heroP: "I'm a game developer focused on programming game mechanics and interactive interfaces. My passion for games is a mix of logic, creativity and how many disciplines come together to create an exciting interactive experience.",
    cv: "Download CV", profile: "Profile",
    profileP: "Game developer specialized in building interactive mechanics and structured systems. My experience covers C# programming, Unity project development and 3D modeling with Blender. I turn creative ideas into playable experiences, handling everything from character behavior logic to environment optimization.",
    edu: "Education", eduList: [["Unity Developer", "Generation", "Sep - Dec 2026"], ["Video Game and Interactive Environments Development", "SENA", "11/2024 - 08/2026"]],
    skills: "Skills", skillList: ["C#", "Scripting", "Version control", "Level design", "QA Tester", "3D modeling"], soft: "Software",
    projects: "My projects", filter: "Filter", all: "All", none: "No projects match this filter.", tip: "View details",
    back: "Back to projects", theme: "Theme", credits: "Credits", site: "Go to site", notFound: "Project not found.",
    contact: "Contact me", mail: "Email", prev: "Previous section", next: "Next section"
  }
};
/* ============ FIN CONTENIDO EDITABLE ============ */

let lang = "es";
try { lang = localStorage.getItem("lang") || "es"; } catch (e) {}
const t = () => TXT[lang];
const I = "assets/icons/";
const ext = 'target="_blank" rel="noopener noreferrer"';
const svgArrow = (d) => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${d}"/></svg>`;
const RIGHT = "M5 12h14M13 6l6 6-6 6", LEFT = "M19 12H5M11 6l-6 6 6 6";
const ORDEN = ["inicio", "sobre-mi", "proyectos", "contacto"];
const li = (arr) => arr.map((x) => `<li>${x}</li>`).join("");
const tags = (arr, c = "") => arr.map((x) => `<span class="tag ${c}">${x}</span>`).join("");

const vistas = {
  inicio: () => `
    <section class="hero">
      <h1>JUAN DAVID GONZÁLEZ <img src="${I}BracketsIcon.svg" alt=""></h1>
      <h2>Game Developer</h2>
      <p>${t().heroP}</p>
      <div class="tags">${tags(["Unity", "C#", "Blender", "Scripting", "QA Testing", "Level Design"])}</div>
      <div class="actions">
        <a href="${LINKS.github}" ${ext} aria-label="GitHub"><img src="${I}MidGithubIcon.svg" alt=""></a>
        <a href="${LINKS.linkedin}" ${ext} aria-label="LinkedIn"><img src="${I}MidLinkedInIcon.svg" alt=""></a>
        <a class="btn dl" href="${LINKS.cv}" download>${t().cv} ${svgArrow("M12 4v11M7 11l5 5 5-5M5 20h14")}</a>
      </div>
    </section>`,

  "sobre-mi": () => `
    <section class="about">
      <div class="panel perfil">
        <img src="assets/img/perfil.jpg" alt="Juan David González">
        <h2>${t().profile}</h2>
        <p>${t().profileP}</p>
        <div class="tags">${tags(["Unity 3D, 2D", "C#", "Scripting", "Level design", "Github"], "fill")}</div>
      </div>
      <div class="panel">
        <h2>${t().edu}</h2>
        <ul class="dots edu">${t().eduList.map(([a, b, c]) => `<li><b>${a}</b><span>${b}</span><span>${c}</span></li>`).join("")}</ul>
      </div>
      <div class="cols">
        <div class="panel"><h2>${t().skills}</h2><ul class="dots">${li(t().skillList)}</ul></div>
        <div class="panel"><h2>${t().soft}</h2>
          <ul class="soft">${[["UnityIcon", "Unity"], ["VSCIcon", "Visual Studio Code"], ["FigmaIcon", "Figma"], ["MidGithubIcon", "Github"], ["BlenderIcon", "Blender 3D"], ["ItchIcon", "Itch.io"]]
            .map(([f, n]) => `<li><img src="${I}${f}.svg" alt="">${n}</li>`).join("")}</ul></div>
      </div>
    </section>`,

  proyectos: (_, filtro = "all") => {
    const todas = [...new Set(PROYECTOS.flatMap((p) => p.tags))];
    const lista = PROYECTOS.filter((p) => filtro === "all" || p.tags.includes(filtro));
    return `
    <div class="head"><h1>${t().projects}</h1>
      <label>${t().filter} <select id="filtro"><option value="all">${t().all}</option>${todas.map((x) => `<option ${x === filtro ? "selected" : ""}>${x}</option>`).join("")}</select></label></div>
    <div class="grid">${lista.map((p) => `
      <a class="card" href="#/proyectos/${p.id}" data-tip="${t().tip}">
        <img src="${p.imagen}" alt="${p[lang].titulo}" loading="lazy">
        <div><h3>${p[lang].titulo}</h3><p>${p[lang].resumen}</p>
        <div class="tags" style="padding:0">${tags(p.tags)}</div></div>
      </a>`).join("") || `<p class="empty">${t().none}</p>`}</div>`;
  },

  detalle: (id) => {
    const p = PROYECTOS.find((x) => x.id === id);
    const back = `<a class="back" href="#/proyectos">${svgArrow("M15 5l-7 7 7 7")} ${t().back}</a>`;
    if (!p) return `${back}<p>${t().notFound}</p>`;
    const d = p[lang];
    return `${back}
    <h1>${d.titulo}</h1>
    <section class="detail">
      <img src="${p.imagen}" alt="${d.titulo}">
      <div class="txt">
        <p>${d.descripcion}</p>
        <p>${t().theme}: ${d.tema}<br>${d.mecanica}<br>${t().credits}</p>
        <ul>${li(d.creditos)}</ul>
        <div class="tags">${tags(p.tags, "fill")}</div>
        ${p.url ? `<a class="btn" href="${p.url}" ${ext}>${t().site} ${svgArrow("M9 5l7 7-7 7")}</a>` : ""}
      </div>
    </section>`;
  },

  contacto: () => {
    const c = (icon, title, v, href) => { const inner = `<img src="${I}${icon}.svg" alt=""><h3>${title}</h3><p>${v}</p>`;
      return href ? `<a class="cc" href="${href}" ${ext}>${inner}</a>` : `<div class="cc">${inner}</div>`; };
    return `
    <h1>${t().contact}</h1>
    <div class="contact">
      ${c("ContactameMailIcon", t().mail, "juandagv95@gmail.com")}
      ${c("WhatsappIcon", "WhatsApp", "+57 318 854 9815", LINKS.whatsapp)}
      ${c("MidGithubIcon", "GitHub", "JuanGV95", LINKS.github)}
      ${c("MidLinkedInIcon", "LinkedIn", "juan-david-gonzalez", LINKS.linkedin)}
      ${c("ItchIcon", "Itch.io", "juandaara.itch.io/", LINKS.itch)}
    </div>
    <img class="buzon" src="assets/img/buzon.png" alt="">`;
  }
};

const app = document.getElementById("app");
const prev = document.getElementById("prev"), next = document.getElementById("next");
const langBtn = document.getElementById("lang");

function render() {
  const [pag = "inicio", id] = location.hash.replace(/^#\//, "").split("/");
  const seccion = ORDEN.includes(pag) ? pag : "inicio";
  app.innerHTML = seccion === "proyectos" && id ? vistas.detalle(id) : vistas[seccion]();
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-nav]").forEach((a, i) => {
    const on = a.dataset.nav === seccion;
    a.classList.toggle("active", on);
    on ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current");
    a.querySelector("span").textContent = t().nav[i];
  });
  langBtn.querySelector("span").textContent = t().name;
  langBtn.setAttribute("aria-label", t().switchTo);
  // flechas: anterior (todas menos la primera) y siguiente (todas menos la última)
  const i = ORDEN.indexOf(seccion);
  prev.hidden = !!id || i === 0; next.hidden = !!id || i === ORDEN.length - 1;
  prev.href = "#/" + ORDEN[Math.max(i - 1, 0)]; next.href = "#/" + ORDEN[Math.min(i + 1, ORDEN.length - 1)];
  prev.innerHTML = svgArrow(LEFT); next.innerHTML = svgArrow(RIGHT);
  prev.setAttribute("aria-label", t().prev); next.setAttribute("aria-label", t().next);
  animar();
  bindFiltro(); bindCards();
}
// entrada escalonada de los bloques de la página
function animar() {
  app.querySelectorAll(".hero>*,.about>*,.head,.grid>*,.contact>*,.back,.detail>*,main>h1").forEach((el, n) => {
    el.style.setProperty("--n", n); el.classList.add("rise");
  });
}
function bindFiltro() {
  const sel = document.getElementById("filtro");
  if (!sel) return;
  sel.onchange = () => {
    app.innerHTML = vistas.proyectos(null, sel.value);
    animar(); bindFiltro(); bindCards();
    document.getElementById("filtro").focus();
  };
}
// el aviso "Ir a detalles" sigue al cursor
function bindCards() {
  document.querySelectorAll(".card").forEach((c) => c.addEventListener("mousemove", (e) => {
    const r = c.getBoundingClientRect();
    c.style.setProperty("--x", e.clientX - r.left + "px");
    c.style.setProperty("--y", e.clientY - r.top + "px");
  }));
}
langBtn.addEventListener("click", () => {
  lang = lang === "es" ? "en" : "es";
  try { localStorage.setItem("lang", lang); } catch (e) {}
  render();
});
addEventListener("hashchange", () => { render(); window.scrollTo(0, 0); });
render();
