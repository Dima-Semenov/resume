import { COMMERCIAL_PROJECTS, PET_PROJECTS } from '../../utils';
import { Title } from '../../components';
import { Card } from './components';
import styles from './styles.module.css';

const Portfolio = () => (
  <section id='portfolio'>
    <Title additionalClass='justify-center'>
      Portfolio
      <span className='text-5xl mobileVerySmall:text-3xl'>💼</span>
    </Title>

    <Title
      variant='h3'
      size='text-3xl'
      additionalClass='pt-6 justify-center'
      viewport={{ once: true }}
    >
      Commercial projects
    </Title>
    <div className={styles.container}>
      {COMMERCIAL_PROJECTS.map((item, index) => (
        <Card key={item.id} {...item} index={index} />
      ))}
    </div>

    <Title
      variant='h3'
      size='text-3xl'
      additionalClass='pt-6 justify-center'
      viewport={{ once: true }}
    >
      Pet projects
    </Title>

    <div className={styles.container}>
      {PET_PROJECTS.map((item, index) => (
        <Card key={item.id} {...item} index={index} />
      ))}
    </div>
  </section>
);

export default Portfolio;
