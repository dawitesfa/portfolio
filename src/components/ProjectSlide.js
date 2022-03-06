import classes from './ProjectSlide.module.css';
import ButtonLink from './UI/ButtonLink';

const ProjectSlide = (props) => {
  return (
    <div
      className={classes['slide']}
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.3) 50%,rgba(0,0,0,0.85) 50%),url(${props.imgUrl})`,
        // transform: `${props.translate} ${props.scale}`,
        // opacity: props.opacity,
        ...props.style,
      }}
    >
      <div className={classes.desc}>
        <h3>{props.appName}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
          aspernatur itaque rerum possimus hic voluptate dolores. Totam
          perspiciatis magnam laboriosam, fuga culpa ex facere deleniti pariatur
          dicta inventore quis expedita?
        </p>
        <div className={classes.links}>
          <ButtonLink anchor={{ href: props.liveUrl, target: '_blank' }}>
            Demo
          </ButtonLink>
          <ButtonLink anchor={{ href: props.gitUrl, target: '_blank' }}>
            Source Code
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide;
