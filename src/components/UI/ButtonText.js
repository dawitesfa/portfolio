import classes from './ButtonText.module.css';

const ButtonText = (props) => {
  return (
    <a className={classes['btn-txt']} href={props.href}>
      {props.children}
    </a>
  );
};

export default ButtonText;
