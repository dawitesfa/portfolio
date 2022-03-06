import classes from './SectionHeading.module.css';

const SectionHeading = (props) => {
  return (
    <div className={classes['sec-heading']}>
      <h2>{props.children}</h2>
    </div>
  );
};

export default SectionHeading;
