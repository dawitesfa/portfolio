import classes from './Social.module.css';
import { socials } from '../data/Data';
import SocialLink from './SocialLink';

const Social = (props) => {
  return (
    <div className={classes.centered}>
      <ul className={classes.social}>
        {socials().map((social, i) => (
          <SocialLink
            key={social.id}
            anchor={{ href: social.link, target: '_blank' }}
            socialName={social.name}
            iconClass={`${social.iconClass}`}
            iconColor={social.iconColor}
          />
        ))}
      </ul>
      {/* <Button>Contact me</Button> */}
    </div>
  );
};

export default Social;
