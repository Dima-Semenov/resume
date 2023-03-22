import classNames from 'classnames';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

const ContactDetailsItem = ({ Icon, link, target, label, index }) => (
  <motion.div
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: index * 0.4, ease: 'easeInOut' }}
    initial={{ opacity: 0, y: 20 }}
    className={classNames(styles.container, 'group')}
  >
    <Icon
      className={classNames(
        styles.icon,
        'group-hover:text-primary group-hover:scale-125'
      )}
    />
    <a href={link} target={target} className='group-hover:text-primary'>
      {label}
    </a>
  </motion.div>
);

export default ContactDetailsItem;
