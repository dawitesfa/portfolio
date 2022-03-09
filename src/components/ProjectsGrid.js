import classes from './ProjectsGrid.module.css';
import ProjectCard from './ProjectCard';
import { projects } from '../data/Data';

const ProjectsGrid = (props) => {
  return (
    <div className={classes.grid}>
      {projects().map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsGrid;
