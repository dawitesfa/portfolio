import classes from './Projects.module.css';
import SectionHeading from './Typography/SectionHeading';
import SectionWrapper from './UI/SectionWrapper';
import ProjectsSlider from './ProjectsSlider';

const Projects = (props) => {
  return (
    <SectionWrapper id={props.id}>
      <SectionHeading>Projects</SectionHeading>
      <div className={classes.projects}>
        <ProjectsSlider />
      </div>
    </SectionWrapper>
  );
};

export default Projects;
