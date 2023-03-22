import React from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

const Loader = () => (
  <motion.div
    animate={{ scale: [1, 0] }}
    transition={{ duration: 0.5, delay: 2.5 }}
    initial={{ scale: 1, x: '-50%' }}
    className={styles.container}
  >
    <span className={styles.span}>
      <span className={styles.loader} />
    </span>
  </motion.div>
);

export default Loader;
