import classes from './SubHeading.module.css';

const SubHeading = (props) => {
  return (
    <div className={classes['sub-heading']}>
      <h3>{props.children}</h3>
    </div>
  );
};

export default SubHeading;
