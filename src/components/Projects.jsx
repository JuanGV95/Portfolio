import { dataProjects } from "../utils/DataProjects";
import { Project } from "./Project";

export const Projects = ({ filter, onFilterChange }) => {
  const handleFilterChange = (e) => {
    onFilterChange(e.target.value);
  };

  const filteredProjects = dataProjects.filter((project) => {
    if (filter === "Todos") {
      return true;
    }
    const projectTags = Array.isArray(project.tags) ? project.tags : project.tags.split(', ');
    return projectTags.includes(filter);
  });

  return (
    <section id="Projects" className="projects">
      <aside className="projectLabel">
        <h1>Mis Proyectos</h1>
        <div className="filterOptions">
          <p>Filtro</p>
          <select 
            name="filtrado" 
            id="filter" 
            className="filterSelections"
            value={filter}
            onChange={handleFilterChange}
          >
            <option value="Todos">Todos</option>
            <option value="HTML, CSS">HTML, CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React js</option>
            <option value="Backend">Backend</option>
          </select>
        </div>
      </aside>
      <section className="projectsContainer">
        {filteredProjects.map((project, index) => (
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
  );
};
