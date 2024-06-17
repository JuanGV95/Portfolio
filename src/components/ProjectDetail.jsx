import { useParams, useNavigate } from 'react-router-dom';
import { dataProjects } from "../utils/DataProjects";

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = dataProjects.find(p => p.id === parseInt(id));

  if (!project) {
    return <p>Project not found</p>;
  }

  const handleGoBack = () =>{
    navigate('/#Projects');
    setTimeout(()=>{
      const targetElement = document.getElementById('Projects');
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior:'smooth',
          block: 'start',
          inline: 'start'
        });
      }
    }, 100);
  };

  return (
    <section className="detailContainer">
      <button onClick={handleGoBack} ><img src="/img/goBack.svg" alt="icono de volver atras" />Volver a proyectos</button>
      <article className="detailContent">
        <h1>{project.title}</h1>
        <div className="detailSections">
          <img src={project.img} alt={`Imagen del proyecto ${project.title}`} />
          <div className='detailDescription'>
            <p>{project.description}</p>
            <div className="tagsDetail">
              {project.tags.map((tag, index) => (
                <span className='tagsDetails' key={index}>{tag}</span>
              ))}
            </div>
          <a href='#'>Ir al sitio <img src="/img/goToSite.svg" alt="Boton para ir a la pagina del proyecto" /></a>
          </div>
        </div>
      </article>
    </section>
  );
};
