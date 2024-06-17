import { dataProjects } from "../utils/DataProjects";
import { Project } from "./Project";
import { useNavigate } from 'react-router-dom';

export const Projects = ({ filter, onFilterChange }) => {
  const navigate = useNavigate();

  const handleFilterChange = (e) => {
    onFilterChange(e.target.value);
  };

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  const filteredProjects = dataProjects.filter((project) => {
    if (filter === "Todos") {
      return true;
    }
    const projectTags = Array.isArray(project.tags) ? project.tags : project.tags.split(', ');
    return projectTags.includes(filter);
  });

  return (
    <section id="Projects" className="projects" data-section="2">
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
            <option value="JS">JavaScript</option>
            <option value="React">React js</option>
            <option value="Backend">Backend</option>
          </select>
        </div>
      </aside>
      <section className="projectsContainer">
        {filteredProjects.map((project, index) => (
          <div key={index} onClick={() => handleProjectClick(project.id)}>
            <Project
              title={project.title}
              description={project.description}
              img={project.img}
              tags={project.tags}
            />
          </div>
        ))}
      </section>
    </section>
  );
};
