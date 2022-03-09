import classes from './ProjectCard.module.css';
import ButtonLink from './UI/ButtonLink';
const ProjectCard = (props) => {
  return (
    <div
      className={classes['project-card']}
      style={{
        backgroundImage: `linear-gradient(to right bottom, rgba(0,0,0,0.3) ,rgba(0,0,0,0.3) ),url(${props.project.imgUrl})`,
      }}
    >
      <div className={classes.description}>
        <h3>{props.project.appName}</h3>
        <p>{props.project.desc}</p>
      </div>
      <div className={classes['hover-overlay']}></div>
      <div className={classes.btns}>
        <ButtonLink anchor={{ href: props.project.liveUrl, target: '_blank' }}>
          Demo
        </ButtonLink>
        <ButtonLink anchor={{ href: props.project.gitUrl, target: '_blank' }}>
          Source Code
        </ButtonLink>
      </div>
    </div>
  );
};

export default ProjectCard;
