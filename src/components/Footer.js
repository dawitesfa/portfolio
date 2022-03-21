import classes from './Footer.module.css';
import SectionWrapper from './UI/SectionWrapper';
import Social from './Social';

const Footer = (props) => {
  return (
    <SectionWrapper width='100%' className={classes['footer']}>
      <Social></Social>
      <small>
        Copyright © 2022 <br /> Dawit T.
      </small>
    </SectionWrapper>
  );
};

export default Footer;
