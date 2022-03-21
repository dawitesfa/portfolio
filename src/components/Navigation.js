import { useContext, useState } from 'react';
import classes from './Navigation.module.css';
import NavItem from './NavItem';
import { navItems } from '../data/Data';
import Button from './UI/Button';
import AppContext from '../store/app-context';

const Navigation = ({ visible, style }) => {
  const appCtx = useContext(AppContext);
  const onShowModalHandler = (e) => {
    appCtx.showModal(true);
  };

  return (
    <nav
      className={`${classes['nav']} ${!visible && classes.float} `}
      style={{ zIndex: '9999', ...style }}
    >
      <h1>DT</h1>
      <ul>
        {navItems().map((item) => {
          return (
            <NavItem key={item.id} href={`#${item.link}`}>
              {item.title}
            </NavItem>
          );
        })}
      </ul>
      <Button className={classes.btn} onClick={onShowModalHandler}>
        Contact me
      </Button>
      <Button className={classes.menu}>=</Button>
    </nav>
  );
};

export default Navigation;
