import { motion } from 'framer-motion';
import { BiWindowOpen } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import styles from './styles.module.css';

const Card = ({ title, description, img, linkToGitHub, linkToDemo, index }) => (
  <motion.div
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.2, delay: index * 0.2, ease: 'easeInOut' }}
    initial={{ scale: 0, opacity: 0 }}
    className={styles.container}
  >
    <div className={styles.imgBlock}>
      <img className={styles.img} src={img} alt='logo' />
    </div>

    <div className={styles.wrapper}>
      <h5 className={styles.title}>{title}</h5>
      <p className={styles.description}>{description}</p>

      <div className={styles.block}>
        <a href={linkToDemo} target='_blank' className={styles.link}>
          <BiWindowOpen className={styles.icon} />
          Open demo
        </a>
        <a href={linkToGitHub} target='_blank' className={styles.link}>
          <FaGithub className={styles.icon} />
          Open code
        </a>
      </div>
    </div>
  </motion.div>
);

export default Card;
