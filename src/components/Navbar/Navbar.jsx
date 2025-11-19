import { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.css';
import Title from '../Title';
import { MenuList, SocialMedia } from './components';
import { images, scrollActive } from '../../utils';

const Nav = () => {
  useEffect(() => {
    scrollActive();
    window.addEventListener('scroll', scrollActive);
  }, []);

  return (
    <motion.nav
      className={styles.nav}
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className={styles.block}>
        <div className={styles.imgBlock}>
          <img
            src={images.avatar}
            className={styles.img}
            alt='avatar'
            loading='lazy'
          />
        </div>

        <Title
          size='text-3xl mobileSmall:text-xl'
          additionalClass='whitespace-nowrap text-white text-center pt-2 tablet:p-0'
        >
          Dmytro <span className='text-silver'>Semenov</span>
        </Title>

        <SocialMedia />
      </div>

      <div className={styles.menuBlock}>
        <MenuList />
      </div>
    </motion.nav>
  );
};

export default Nav;
