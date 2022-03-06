import classes from './Dot.module.css';

const Dot = (props) => {
  return (
    <li className={classes['dot']} onClick={props.onClick}>
      <span className={classes['dot-inner']} style={props.style}></span>
    </li>
  );
};

export default Dot;
