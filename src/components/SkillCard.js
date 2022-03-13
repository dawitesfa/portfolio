import classes from './SkillCard.module.css';
import Card from '../components/UI/Card';

const SkillCard = (props) => {
  return (
    <Card className={classes['skill-card']}>
      <div
        className={classes.icon}
        style={{ backgroundImage: `url(${props.skillIcon})` }}
      ></div>
      <div className={classes['skill-detail']}>
        <h3 className={classes['skill-name']}>{props.skillName}</h3>
        <ul className={classes.rate}>
          {Array.from({ length: 5 }).map((item, i) => {
            return (
              <li
                key={i}
                style={{
                  color:
                    i < props.skillRate ? props.color : 'var(--color-primary)',
                }}
              >
                ★
              </li>
            );
          })}
        </ul>
        {/* <p className={classes['skill-desc']}>{props.skillDesc}</p> */}
      </div>
    </Card>
  );
};

export default SkillCard;
