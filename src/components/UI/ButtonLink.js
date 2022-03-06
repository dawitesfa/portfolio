import classes from './ButtonLink.module.css';
// import cv from '../../downloadable/cv.pdf'

const ButtonLink = (props) => {
  return props.type ? (
    <a
      className={`${classes['btn-link']} ${props.className}`}
      {...props.anchor}
      download
    >
      {props.children}
    </a>
  ) : (
    <a
      className={`${classes['btn-link']} ${props.className}`}
      {...props.anchor}
    >
      {props.children}
    </a>
  );
};

export default ButtonLink;
