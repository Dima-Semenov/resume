import { Title } from '../../components';
import { useCallback, useMemo, useState } from 'react';
import { SKILLS_DATA } from '../../utils';
import { CircleProgres, SkillsList } from './components';
import styles from './styles.module.css';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS_DATA[0]);

  const filteredData = useMemo(() => {
    const filteredData = SKILLS_DATA.sort((a, b) => b.persent - a.persent);
    setSelectedSkill(filteredData[0]);

    return filteredData;
  }, []);

  const handleClick = useCallback((item) => {
    setSelectedSkill(item);
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  return (
    <section id='skills'>
      <Title>Skills</Title>

      <div className={styles.container}>
        <SkillsList
          data={filteredData}
          handleClick={handleClick}
          selectedSkill={selectedSkill}
        />

        <div className={styles.wrapper}>
          <CircleProgres selectedSkillPersent={selectedSkill.persent} />

          <span className={styles.title}>
            <selectedSkill.Icon className={styles.icon} />
            {selectedSkill.persent + '%'}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
