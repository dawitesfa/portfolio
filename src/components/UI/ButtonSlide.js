import classes from './ButtonSlide.module.css';

const ButtonSlide = (props) => {
  return (
    <div
      className={`${classes['arrow']} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default ButtonSlide;
