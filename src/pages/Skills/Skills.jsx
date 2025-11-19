import { AnimatedNumber, Title } from '../../components';
import { Fragment, useCallback, useMemo, useState } from 'react';
import { SKILLS_DATA, SKILL_CATEGORIES_ORDER } from '../../utils';
import { CircleProgres, SkillsList } from './components';
import styles from './styles.module.css';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS_DATA[0]);

  const groupedData = useMemo(() => {
    const groupedSkills = SKILLS_DATA.reduce((acc, skill) => {
      const order = SKILL_CATEGORIES_ORDER[skill.category];
      const key = `${order}_${skill.category}`;

      if (!acc[key]) {
        acc[key] = [];
      }

      acc[key].push(skill);
      return acc;
    }, {});

    const sortedGrouped = Object.fromEntries(
      Object.entries(groupedSkills).map(([category, items]) => {
        const sortedItems = items.sort((a, b) => b.persent - a.persent);
        return [category, sortedItems];
      })
    );

    setSelectedSkill(Object.values(sortedGrouped)[0][0]);

    return sortedGrouped;
  }, []);

  const handleClick = useCallback((item) => {
    setSelectedSkill(item);
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  return (
    <section id='skills'>
      <Title additionalClass='justify-center' viewport={{ once: true }}>
        Skills
        <span className='text-5xl mobileVerySmall:text-3xl'>🚀</span>
      </Title>

      <div className={styles.container}>
        {Object.entries(groupedData).map(([category, data]) => (
          <Fragment key={category}>
            <Title
              variant='h3'
              size='text-2xl'
              additionalClass='pb-2'
              viewport={{ once: true }}
            >
              {category.split('_').slice(1).join(' ')}
            </Title>
            <SkillsList
              data={data}
              handleClick={handleClick}
              selectedSkill={selectedSkill}
            />
          </Fragment>
        ))}

        <div className={styles.wrapper}>
          <CircleProgres selectedSkillPersent={selectedSkill.persent} />

          <span className={styles.title}>
            {selectedSkill.Icon ? (
              <>
                <selectedSkill.Icon className={styles.icon} />
                <span>
                  <AnimatedNumber
                    from={0}
                    to={selectedSkill.persent}
                    duration={2}
                  />{' '}
                  %
                </span>
              </>
            ) : (
              <>
                <span className='text-4xl'>{selectedSkill.customEmoji}</span>
                {selectedSkill.level}
              </>
            )}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
