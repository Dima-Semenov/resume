import { motion } from 'framer-motion';
import styles from './styles.module.css';

const ItemForPeriod = ({ mainTitle, subTitle, description, period }) => (
  <div className={styles.container}>
    <div className={styles.dot} />
    <motion.div
      whileInView={{ left: 0, opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      initial={{ left: '100%', opacity: 0 }}
      className={styles.block}
    >
      <div>
        <h3 className={styles.title}>{mainTitle}</h3>
        <h4 className={styles.subTitle}>{subTitle}</h4>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.periodWrap}>
        <p className={styles.periodTitle}>{period}</p>
      </div>
    </motion.div>
  </div>
);

export default ItemForPeriod;
