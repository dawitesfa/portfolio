import React from 'react';
import classes from './NavItem.module.css';

const NavItem = React.forwardRef((props, ref) => {
  return (
    <li className={classes['nav-item']}>
      <a ref={ref} href={props.href} className={classes['nav-link']}>
        {props.children}
      </a>
    </li>
  );
});

export default NavItem;
