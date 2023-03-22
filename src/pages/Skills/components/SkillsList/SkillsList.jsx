import { SKILLS_DATA } from '../../../../utils';
import SkillItem from '../SkillItem/SkillItem';
import styles from './styles.module.css';

const SkillsList = ({ handleClick, selectedSkill, data }) => (
  <div className={styles.container}>
    {data.map((item, index) => (
      <SkillItem
        index={index}
        key={item.name}
        handleClick={() => handleClick(item)}
        isSelected={selectedSkill.name === item.name}
        {...item}
      />
    ))}
  </div>
);

export default SkillsList;
