import { ItemForPeriod, PeriodContainer, Title } from '../components';
import { WORKS } from '../utils';

const Experience = () => (
  <section id='experience'>
    <Title>Experience</Title>
    <PeriodContainer>
      <div>
        {WORKS.map((item) => (
          <ItemForPeriod
            key={item.id}
            mainTitle={item.position}
            subTitle={item.company}
            {...item}
          />
        ))}
      </div>
    </PeriodContainer>
  </section>
);

export default Experience;
