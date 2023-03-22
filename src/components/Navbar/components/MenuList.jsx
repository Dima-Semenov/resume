import classNames from 'classnames';
import { motion } from 'framer-motion';
import { MENU } from '../../../utils';
import styles from './styles.module.css';

const MenuList = () => (
  <ul className={styles.list}>
    {MENU.map(({ title, Icon }, index) => (
      <motion.li
        animate={{ scale: [0, 1], x: [100, 0] }}
        transition={{ duration: 0.4, delay: index * 0.2 }}
        initial={{ scale: 0 }}
        key={title}
        className={classNames(styles.listItem, 'group')}
      >
        <a
          href={`#${title}`}
          className={classNames(styles.menuLink, 'group-hover:text-white')}
          aria-label='Link to menu item'
        >
          <Icon
            className={classNames(
              styles.menuIcon,
              'group-hover:scale-[1.4] tablet:group-hover:scale-100 group-hover:text-white'
            )}
          />
          <span className={styles.menuTitle}>{title}</span>
        </a>
      </motion.li>
    ))}
  </ul>
);

export default MenuList;
