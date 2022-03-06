import classes from './SectionWrapper.module.css';

const SectionWrapper = ({ children, width = '90rem', className, id }) => {
  return (
    <section
      style={{ maxWidth: width }}
      id={id}
      className={`${classes.wrapper} ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
