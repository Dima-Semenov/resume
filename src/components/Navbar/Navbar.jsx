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
    <nav className={styles.nav}>
      <div className={styles.block}>
        <motion.div
          className={styles.imgBlock}
          initial={{ scale: 0.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <img
            src={images.avatar}
            className={styles.img}
            alt='avatar'
            loading='lazy'
          />
        </motion.div>

        <Title
          viewport={{ once: true }}
          size='text-3xl tablet:text-xl'
          additionalClass='whitespace-nowrap text-white text-center pt-2 tablet:p-0 !gap-1'
        >
          Dmytro <span className='text-silver'>Semenov</span>
        </Title>

        <SocialMedia />
      </div>

      <div className={styles.menuBlock}>
        <MenuList />
      </div>
    </nav>
  );
};

export default Nav;
