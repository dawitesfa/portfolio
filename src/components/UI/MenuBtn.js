import { useState } from 'react';
import classes from './MenuBtn.module.css';

const MenuBtn = (props) => {
  const [navVisible, setNavVisible] = useState(false);
  const onMenuHandler = () => {
    props.menuClick(navVisible);
    setNavVisible((prev) => !prev);
  };
  return (
    <>
      <div onClick={onMenuHandler} className={classes['menu-btn']}>
        <div
          style={{
            backgroundColor: navVisible && 'var(--color-primary-accent)',
          }}
          className={classes['menu-icon']}
        >
          <span
            style={{ transform: navVisible && 'translateY(0) rotate(135deg)' }}
            className={classes.above}
          ></span>
          <span
            style={{ transform: navVisible && 'translateY(0) rotate(-135deg)' }}
            className={classes.below}
          ></span>
        </div>
      </div>
      <div
        style={{ transform: navVisible && 'scale(60)' }}
        className={classes.bg}
      ></div>
    </>
  );
};

export default MenuBtn;
