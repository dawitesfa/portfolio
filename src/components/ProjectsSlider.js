import React, { useState, useEffect, useCallback } from 'react';

import { projects } from '../data/Data';
import classes from './ProjectsSlider.module.css';
import ProjectSlide from './ProjectSlide';
import ButtonSlide from './UI/ButtonSlide';
import Dot from './UI/Dot';

const ProjectsSlider = (props) => {
  const [counter, setCounter] = useState(0);
  const projectsLength = projects().length;

  const onNextBtnClick = useCallback(() => {
    if (counter >= projectsLength - 1) {
      setCounter(0);
    } else {
      setCounter((prev) => ++prev);
    }
  }, [counter, projectsLength]);

  useEffect(() => {
    const timer = setInterval(onNextBtnClick, 15000);
    return () => {
      clearInterval(timer);
    };
  }, [onNextBtnClick]);

  const onPrevBtnClick = () => {
    if (counter === 0) {
      setCounter(projectsLength - 1);
    } else {
      setCounter((prev) => --prev);
    }
  };
  return (
    <div className={classes['slider-container']}>
      <ButtonSlide onClick={onPrevBtnClick} className={classes['arrows-left']}>
        ←
      </ButtonSlide>
      <ButtonSlide onClick={onNextBtnClick} className={classes['arrows-right']}>
        →
      </ButtonSlide>
      <div className={classes.slider}>
        {projects().map((project, i) => {
          return (
            <ProjectSlide
              style={{
                transform: `translateX(${105 * (i - counter)}%) ${
                  counter === i ? 'scale(1)' : 'scale(0.3)'
                }`,
                opacity: counter === i ? '1' : '0',
              }}
              key={project.id}
              imgUrl={project.imgUrl}
              liveUrl={project.liveUrl}
              gitUrl={project.gitUrl}
              appName={project.appName}
              desc={project.desc}
            />
          );
        })}
      </div>
      <ul className={classes['dot-container']}>
        {projects().map((_, i) => {
          return (
            <Dot
              key={`dot-${i}`}
              style={{ opacity: counter === i && '0.75' }}
              onClick={() => {
                setCounter(i);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectsSlider;
