import classes from './TextHighlight.module.css';

const TextHighlight = (props) => {
  return (
    <span
      className={`${classes['text-highlight']} ${props.className}`}
      style={{ color: props.textColor }}
    >
      <span className={classes.highlight} style={props.style}></span>
      {props.children}
    </span>
  );
};

export default TextHighlight;
