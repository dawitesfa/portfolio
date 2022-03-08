import classes from './TertiaryHeading.module.css';

const TertiaryHeading = (props) => {
  return <h2 className={classes['tertiary-heading']}>{props.children}</h2>;
};

export default TertiaryHeading;
