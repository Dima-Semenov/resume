import { ItemForPeriod, PeriodContainer, Title } from '../components';
import { WORKS } from '../utils';

const Experience = () => (
  <section id='experience'>
    <Title additionalClass='justify-center'>
      Experience <span className='text-5xl mobileVerySmall:text-3xl'>👨‍💻</span>
    </Title>
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
