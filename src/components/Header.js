import classes from './Header.module.css';
import Navigation from './Navigation';
import useOnScreen from '../hooks/on-screen';
import { MePic } from '../index';
import ButtonLink from './UI/ButtonLink';

const Header = () => {
  const [headerRef, visible] = useOnScreen({
    threshold: '0.1',
    rootMargin: '-70px',
    root: null,
  });
  return (
    <header ref={headerRef} className={classes.header} id='home'>
      <Navigation visible={visible} />
      <div className={classes['header-content']}>
        <div className={classes['pic-container']}>
          <img src={MePic} alt='Profile' />
        </div>
        <div className={classes['name-container']}>
          <h1 className={classes.name}>
            Dawit <span>Tesfamariam</span>
          </h1>
          <p className={classes.pro}>
            a <span>frontend</span> web developer
          </p>
        </div>
        <div className={classes['desc-wrapper']}>
          <p className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            dolorem amet excepturi reiciendis, quos eveniet error hic mollitia
            ea ullam commodi blanditiis dicta dolor iste aut nesciunt, deleniti
            repellat perferendis.
          </p>
          <ButtonLink
            className={classes.link}
            anchor={{ href: '../downloadable/cv.pdf' }}
            type='download'
          >
            Download CV
          </ButtonLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
