import classes from './SocialLink.module.css';

const SocialLink = (props) => {
  return (
    <li className={`${classes['social-link']}`}>
      <a {...props.anchor}>
        <span className={classes.icon} style={{ color: props.iconColor }}>
          <i className={props.iconClass}></i>
        </span>
        {props.socialName}
      </a>
    </li>
  );
};

export default SocialLink;
