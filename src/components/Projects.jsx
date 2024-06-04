import { dataProjects } from "../utils/DataProjects";
import { Project } from "./Project";

export const Projects = () =>{
    return(
        <section id="Projects" className="projects">
        <aside className="projectLabel">
          <h1>Mis Proyectos</h1>
          <div className="filterOptions">
            <p>Filtro</p>
            <select name="filtrado" id="filter" className="filterSelections">
              <option value="Todos" default>Todos</option>
              <option value="HTML, CSS">HTML, CSS</option>
              <option value="javascript">JavaScript</option>
              <option value="react">React js</option>
              <option value="backend">Backend</option>
            </select>
          </div>
        </aside>
        <section className="projectsContainer">
        {dataProjects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              img={project.img}
              tags={project.tags}
            />
          ))}
        </section>
      </section>

    )
}