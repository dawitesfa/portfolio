import classes from './Skills.module.css';
import SectionWrapper from './UI/SectionWrapper';
import SkillCard from './SkillCard';
import SectionHeading from './Typography/SectionHeading';
import SubHeading from './Typography/SubHeading';
import { skillCards, skillLearning } from '../data/Data';

const Skills = (props) => {
  return (
    <SectionWrapper id={props.id}>
      <SectionHeading>Skills</SectionHeading>
      <SubHeading>Skills | acquired</SubHeading>
      <div className={classes['section-skills']}>
        {skillCards().map((skill) => {
          return (
            <SkillCard
              key={skill.id}
              color={skill.color}
              skillIcon={skill.skillIcon}
              skillName={skill.skillName}
              skillRate={skill.skillRate}
              skillDesc={skill.skillDesc}
            />
          );
        })}
      </div>

      <SubHeading>Skills | learning</SubHeading>
      <div className={classes['section-skills']}>
        {skillLearning().map((skill) => {
          return (
            <SkillCard
              key={skill.id}
              color={skill.color}
              skillIcon={skill.skillIcon}
              skillName={skill.skillName}
              skillRate={skill.skillRate}
              skillDesc={skill.skillDesc}
            />
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
