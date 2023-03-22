import { useEffect, useRef } from 'react';
import { initialAnimationHover, PORTFOLIO_DATA } from '../../utils';
import { Title } from '../../components';
import { Card } from './components';
import styles from './styles.module.css';

const Portfolio = () => {
  const ref = useRef(null);

  useEffect(() => {
    const allProject = Array.from(ref.current.children) || [];
    initialAnimationHover({ allProject });
  }, []);

  return (
    <section id='portfolio'>
      <Title>Portfolio</Title>

      <div ref={ref} className={styles.container}>
        {PORTFOLIO_DATA.map((item, index) => (
          <Card key={item.id} {...item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
