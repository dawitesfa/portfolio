import ReactDOM from 'react-dom';
import { useState } from 'react';
import classes from './Header.module.css';
import Navigation from './Navigation';
import useOnScreen from '../hooks/on-screen';
import { MePic } from '../index';
import ButtonLink from './UI/ButtonLink';
import TextHighlight from './Typography/TextHighlight';
import ButtonSlide from './UI/ButtonSlide';
import MenuBtn from './UI/MenuBtn';

const Header = () => {
  const [headerRef, visible] = useOnScreen({
    threshold: '0.1',
    rootMargin: '-70px',
    root: null,
  });
  const onUpBtnHandler = (e) => {
    headerRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const upButton = (
    <ButtonSlide className={classes['up-btn']} onClick={onUpBtnHandler}>
      ↑
    </ButtonSlide>
  );
  const [navVisible, setNavVisible] = useState(false);
  // const toggleVisible = () => {
  //   setNavVisible((prev) => !prev);
  // };
  const onMenuClick = (vis) => {
    setNavVisible((prev) => !prev);
  };
  return (
    <>
      <MenuBtn menuClick={onMenuClick}></MenuBtn>
      <header ref={headerRef} className={classes.header} id='home'>
        <Navigation
          style={{
            opacity: navVisible && '1',
            visibility: navVisible && 'visible',
          }}
          visible={visible}
        />
        <div className={classes['header-content']}>
          <div className={classes['pic-container']}>
            <img src={MePic} alt='Profile' />
          </div>
          <div className={classes['name-container']}>
            <h1 className={classes.name}>
              Dawit{' '}
              <TextHighlight
                textColor='var(--color-primary-accent)'
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                Tesfamariam
              </TextHighlight>
            </h1>
            <p className={classes.pro}>
              a{' '}
              <TextHighlight
                textColor='var(--color-primary-accent)'
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                frontend
              </TextHighlight>{' '}
              web developer
            </p>
          </div>
          <div className={classes['desc-wrapper']}>
            <p className={classes.description}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus dolorem amet excepturi reiciendis, quos eveniet error
              hic mollitia ea ullam commodi blanditiis dicta dolor iste aut
              nesciunt, deleniti repellat perferendis.
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
      {!visible &&
        ReactDOM.createPortal(upButton, document.getElementById('up-root'))}
    </>
  );
};

export default Header;
