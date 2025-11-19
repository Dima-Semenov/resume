import classNames from 'classnames';
import { motion } from 'framer-motion';
import styles from './styles.module.css';
import { AnimatedNumber } from '../../../../components';

const SkillItem = ({
  handleClick,
  isSelected,
  name,
  persent,
  Icon = null,
  customEmoji,
  level = null,
  index,
}) => (
  <motion.button
    key={name}
    whileInView={{ scale: 1 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    initial={{ scale: 0 }}
    viewport={{ once: true }}
    onClick={handleClick}
    className={classNames(styles.button, {
      'bg-primary text-white': isSelected,
      'bg-white text-primary': !isSelected,
    })}
  >
    {level ? (
      <>
        <div className='flex gap-2 items-center mobileSmall'>
          <span className='text-xl mobileSmall:text-base'>{customEmoji}</span>
          <span>{name}</span>
        </div>
        <span>{level}</span>
      </>
    ) : (
      <>
        <div className='flex gap-2 items-center'>
          <Icon className={styles.icon} />
          {name}
        </div>
        <div>
          <AnimatedNumber from={0} to={persent} duration={3} /> %
        </div>
      </>
    )}
  </motion.button>
);

export default SkillItem;
