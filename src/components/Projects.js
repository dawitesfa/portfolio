import { useState } from 'react';
import classes from './Projects.module.css';
import SectionHeading from './Typography/SectionHeading';
import SectionWrapper from './UI/SectionWrapper';
import ProjectsSlider from './ProjectsSlider';
// import ProjectsGrid from './ProjectsGrid';

const Projects = (props) => {
  // const [isGrid, setIsGrid] = useState(false);
  // const onGridToggleHandler = (e) => {
  //   setIsGrid((prev) => !prev);
  // };
  return (
    <SectionWrapper id={props.id}>
      <div className={classes.heading}>
        <SectionHeading>Projects</SectionHeading>
        {/* <div
          onClick={onGridToggleHandler}
          className={classes['icon-container']}
        >
          <span>view as → </span>
          {isGrid && <i className='bi bi-file-earmark-slides'></i>}
          {!isGrid && <i className='bi bi-grid'></i>}
        </div> */}
      </div>
      <div className={classes.projects}>
        {/* {!isGrid && <ProjectsSlider />}
        {isGrid && <ProjectsGrid />} */}
        <ProjectsSlider />
      </div>
    </SectionWrapper>
  );
};

export default Projects;
