import { motion } from 'framer-motion';
import { SOCIAL_MEDIA } from '../../../utils';
import styles from './styles.module.css';

const SocialMedia = () => (
  <div className={styles.mediaBlock}>
    {SOCIAL_MEDIA.map(({ Icon, link }, index) => (
      <motion.a
        key={link + index}
        animate={{ scale: [0, 1] }}
        transition={{ duration: 0.4, delay: index * 0.2 }}
        initial={{ scale: 0 }}
        href={link}
        target='_blank'
        className={styles.link}
      >
        <Icon className={styles.icon} />
      </motion.a>
    ))}
  </div>
);

export default SocialMedia;
