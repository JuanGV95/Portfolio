import { Link } from 'react-router-dom';

export const Project = ({ id, title, description, img, tags }) => {
  return (
    <article className="projectsContent">
      <Link to={`/project/${id}`}>
        <img src={img} alt={`Imagen del proyecto ${title}`} />
        <div className="projectsResume">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="tagss">
            {tags.map((tag, index) => (
              <button key={index}>{tag}</button>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
};
