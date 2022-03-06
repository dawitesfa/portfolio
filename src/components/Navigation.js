import { useRef } from 'react';
import classes from './Navigation.module.css';
import NavItem from './NavItem';
import { navItems } from '../data/Data';
import Button from './UI/Button';

const Navigation = ({ visible }) => {
  const onNavItemClick = (e) => {};
  return (
    <nav className={`${classes['nav']} ${!visible && classes.float}`}>
      <h1>DT</h1>
      <ul onClick={onNavItemClick}>
        {navItems().map((item) => {
          return (
            <NavItem key={item.id} href={`#${item.link}`}>
              {item.title}
            </NavItem>
          );
        })}
      </ul>
      <Button>Contact me</Button>
    </nav>
  );
};

export default Navigation;
