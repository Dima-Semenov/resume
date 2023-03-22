import classNames from 'classnames';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

const SkillItem = ({ handleClick, isSelected, name, Icon, index }) => (
  <motion.button
    key={name}
    whileInView={{ scale: 1 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    initial={{ scale: 0 }}
    onClick={handleClick}
    className={classNames(styles.button, {
      'bg-primary text-white': isSelected,
      'bg-white text-primary': !isSelected,
    })}
  >
    <div>
      <Icon className={styles.icon} />
    </div>
    {name}
  </motion.button>
);

export default SkillItem;
